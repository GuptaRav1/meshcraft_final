const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Modules import
const User = require('../models/userModel');
const asyncHandler = require('../utils/asyncHandler');
const Response = require('../utils/responseHandler.js');
const sendMail = require('../utils/sendMail');

// OTP templates
const signupOtpTemplate = require('../templates/signupOtpTemplate.js');
const loginOtpTemplate = require('../templates/loginOtpTemplate.js');
const resetPasswordOtpTemplate = require('../templates/resetPasswordOtpTemplate.js');

// Helper to generate token
const generateToken = (user) => {
    return jwt.sign({
        userId: user._id,
        username: user.name,
        email: user.email
    }, process.env.JWT_SECRET, { expiresIn: '8h' });
};

// Helper to send OTP email
const sendOtpEmail = async (user, type, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    user.otp = otp;

    let subject, htmlContent;

    switch (type) {
        case 'signup':
            subject = 'Complete Your Signup - OTP Verification';
            htmlContent = signupOtpTemplate(otp, user.name);
            break;
        case 'login':
            subject = 'Login Verification OTP';
            htmlContent = loginOtpTemplate(otp, user.name);
            break;
        case 'reset-password':
            subject = 'Password Reset OTP';
            htmlContent = resetPasswordOtpTemplate(otp, user.name);
            break;
        default:
            return res.status(400).json(Response('failed', 'Invalid OTP type.'));
    }

    try {
        await user.save();
        await sendMail(user.email, subject, htmlContent);

        return res.status(200).json(
            Response('success', 'OTP email sent successfully.', user.email)
        );
    } catch (err) {
        return res.status(500).json(
            Response('failed', `Failed to send email: ${err.message}`)
        );
    }
};

// api/v1/users/login
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json(Response('failed', 'Email and password are required.'));
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json(Response('failed', 'Invalid Email.'));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json(Response('failed', 'Invalid Password.'));
    }

    const token = generateToken(user);
    res.status(200).json(Response('success', 'User login successful.', { token, user }));
});

// api/v1/users/signup
const signup = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json(Response('failed', 'All fields are required.'));
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json(Response('failed', 'Email already exists.'));
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    await sendOtpEmail(newUser, 'signup', res);
});

// api/v1/users/send-otp
const send_otp = asyncHandler(async (req, res) => {
    const { email, type } = req.body;

    if (!email) {
        return res.status(400).json(Response('failed', 'Email is required.'));
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json(Response('failed', 'User not found.'));
    }

    await sendOtpEmail(user, type, res);
});

// api/v1/users/verify-otp
const verifyOtp = asyncHandler(async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json(Response('failed', 'Email and OTP are required.'));
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json(Response('failed', 'User not found.'));
    }

    if (user.otp !== otp) {
        return res.status(400).json(Response('failed', 'Invalid OTP.'));
    }

    user.otp = null;
    await user.save();

    res.status(200).json(Response('success', 'OTP verified successfully.'));
});

// api/v1/users/reset-password
const reset_password = asyncHandler(async (req, res) => {
    const { email, password, otp } = req.body;

    if (!email || !password || !otp) {
        return res.status(400).json(Response('failed', 'All fields are required.'));
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json(Response('failed', 'User not found.'));
    }

    if (user.otp !== otp) {
        return res.status(400).json(Response('failed', 'Invalid OTP.'));
    }

    user.password = password;
    user.otp = null;
    await user.save();

    res.status(200).json(Response('success', 'Password reset successfully.'));
});

module.exports = {
    login,
    signup,
    send_otp,
    verifyOtp,
    reset_password,
};

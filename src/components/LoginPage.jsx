import React from "react";
import * as Components from './LoginPageComponents';
import { BorderWrapper } from './LoginPageComponents'; 

function LoginPage() {
  const [signIn, toggle] = React.useState(true);

  return (
    <div className="flex items-center justify-center h-screen">
      <BorderWrapper>
      <Components.Container>
        {/* Sign Up Form */}
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            
            <Components.InputContainer>
              <Components.Input type='text' placeholder=' ' required />
              <Components.InputLabel>Name</Components.InputLabel>
              <Components.Underline />
            </Components.InputContainer>
            
            <Components.InputContainer>
              <Components.Input type='email' placeholder=' ' required />
              <Components.InputLabel>Email</Components.InputLabel>
              <Components.Underline />
            </Components.InputContainer>
            
            <Components.InputContainer>
              <Components.Input type='password' placeholder=' ' required />
              <Components.InputLabel>Password</Components.InputLabel>
              <Components.Underline />
            </Components.InputContainer>

            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        {/* Sign In Form */}
        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign In</Components.Title>
            
            <Components.InputContainer>
              <Components.Input type='email' placeholder=' ' required />
              <Components.InputLabel>Email</Components.InputLabel>
              <Components.Underline />
            </Components.InputContainer>
            
            <Components.InputContainer>
              <Components.Input type='password' placeholder=' ' required />
              <Components.InputLabel>Password</Components.InputLabel>
              <Components.Underline />
            </Components.InputContainer>

            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        {/* Overlay Section */}
        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            {/* Overlay for Sign In */}
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            {/* Overlay for Sign Up */}
            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start your journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>

          </Components.Overlay>
        </Components.OverlayContainer>

      </Components.Container>
      </BorderWrapper>
    </div>
  );
}

export default LoginPage;
import '../index.css'
import { StrictMode } from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import { createRoot } from 'react-dom/client'
import LoginPage from './components/LoginPage'
import Navbar from './components/navbar/Navbar'
import MarketPlace from './components/MarketPlace'
import SideModal from './components/modals/SideModal'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <SideModal />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/market',
        element: <MarketPlace />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
    ],
    errorElement: <Error />
  },
])

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/router'
// import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import LoginPage from './pages/Login.jsx'
// import UsersPage from './pages/Users.jsx'
// import RegisterPage from './pages/register.jsx'
// import BookPage from './pages/Book.jsx'
// import TodoApp from './components/todo/TodoApp.jsx'
// import { ErrorPage } from './pages/error.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <TodoApp />,
//       },
//       {
//         path: '/users',
//         element: <UsersPage />,
//       },
//       {
//         path: '/ook',
//         element: <BookPage />,
//       },
//     ],
//   },
//   {
//     path: '/login',
//     element: <LoginPage />,
//   },
//   {
//     path: '/register',
//     element: <RegisterPage />,
//   },
// ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
)

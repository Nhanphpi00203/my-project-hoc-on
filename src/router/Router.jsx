// router.js

import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import LoginPage from '../pages/Login.jsx'
import UsersPage from '../pages/Users.jsx'
import RegisterPage from '../pages/Register.jsx'
import BookPage from '../pages/Book.jsx'
import TodoApp from '../components/todo/TodoApp.jsx'
import { ErrorPage } from '../pages/error.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'book',
        element: <BookPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
])

export default Router

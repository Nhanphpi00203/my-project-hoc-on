// ()=> {}
import './components/todo/Todo.css'
import 'antd/dist/reset.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

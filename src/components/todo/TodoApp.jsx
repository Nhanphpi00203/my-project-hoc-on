import TodoData from './TodoData'
import TodoNew from './TodoNew'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () => {
  const [todoList, setTodoList] = useState([])

  const AddNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    }
    setTodoList([...todoList, newTodo])

    // todoList.push(newTodo)
    // setTodoList(todoList)
    // array.push
  }
  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id) // lọc id để xóa theo id
    console.log('>>> check newTodo', newTodo)
    setTodoList(newTodo)
  }

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  // {key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew AddNewTodo={AddNewTodo} />
      {/* có thể dùng ? : để xây dựng điều kiện{kieu kien ? (hien thí 1):(hien thì 2)}*/}
      {todoList.length === 0 && (
        <div className="todo-image">
          <img src={reactLogo} alt="" className="react-logo" />
        </div>
      )}
      {todoList.length > 0 && (
        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
      )}
    </div>
  )
}
export default TodoApp

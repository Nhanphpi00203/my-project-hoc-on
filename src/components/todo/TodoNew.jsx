import { useState } from 'react'

const TodoNew = (props) => {
  // useState hook (getter/setter)
  // const valueInput = 'Eric'
  // valueInput là biết số setValueInput là 1 hàm dùng để cập nhật biết valueInput
  const [valueInput, setValueInput] = useState('')
  const { AddNewTodo } = props

  // AddNewTodo('Eric')
  const handleClick = () => {
    AddNewTodo(valueInput)
    setValueInput('')
    // console.log('>>> check', valueInput)
  }

  const handleOnChange = (name) => {
    setValueInput(name)
  }
  return (
    <div className="todo-new">
      {/* e = event có thể dùng e hoặc event đều đc  */}
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button onClick={handleClick} style={{ cursor: 'pointer' }}>
        Add
      </button>
      <div>My text input is = {valueInput} </div>
    </div>
  )
}

export default TodoNew

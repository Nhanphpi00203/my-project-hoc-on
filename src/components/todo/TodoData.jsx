const TodoData = (props) => {
  // props là 1 biến object{ }
  // {
  // 	name: "Eric"
  // 	age: 25
  // 	data: {}
  // }
  // destructruring object
  //
  // const name = props.name
  // const age = props.age
  // const data = props.data
  // const { name, age, data } = props
  const { todoList, deleteTodo } = props

  const handleClick = (id) => {
    deleteTodo(id)
  }
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log('>>> check map:', item, index)
        return (
          <div key={item.id} className={`todo-item ${index}`}>
            {item.name}
            <button onClick={() => handleClick(item.id)}>Delete</button>
          </div>
        )
      })}
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  )
}

export default TodoData

import React from "react"

import TodoItem from "./TodoItem"
class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          // <li key={todo.id}>{todo.title}</li>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}  // handleChangeProps is a function
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    )
  }
}

export default TodosList

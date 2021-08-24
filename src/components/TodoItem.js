import React from 'react';

const TodoItem = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={ props.todo.completed }
        onChange={() => this.props.handleChangeProps()}
      /> {props.todo.title}
    </li>
  );
}

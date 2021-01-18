import React from 'react'
import TodoItem from './todoItem'

function Todolist(props) {
    return (
        <ul>
            {props.todos.map((todo, index) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={index}
                    onChange={props.onToggle}
                    removeTodo={props.removeTodo}
                    todosDetails={props.todosDetails}
                    openModal={props.openModal}
                  />
                );
            })}
        </ul>
    )
}

export default Todolist
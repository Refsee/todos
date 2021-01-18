import React from 'react'

function TodoItem({ todo, index, onChange, todosDetails, openModal }) {

  return (
    <>
      <li>
        <div className="lion">
          <span className={todo.comleted ? "done" : ""}>
            <input
              type="checkbox"
              onChange={() => onChange(todo.id)}
              checked={todo.comleted}
            />
            <strong> {index + 1}</strong>
            &nbsp;
            {todo.title}
          </span>

          <span>
            <button className="butDetails" onClick={() => todosDetails(todo.title)}>
              Деталі
            </button>

            <button
              className="butDelete"
              onClick={() => openModal(todo.title)}>
              Видалити
            </button>
          </span>
        </div>
        <div>
          {todo.details && (
            <div>
              <p className="pPlus">
                {todo.text}
              </p>
              <p style={({ margin: '0.5rem', padding: '0.2rem', textAlign: 'right' })}>
                {todo.date}
              </p>
            </div>
          )}
        </div>
      </li>
    </>
  );
}

export default TodoItem
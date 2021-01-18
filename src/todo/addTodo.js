import React from 'react'

function AddTodo(props) {
    return (
      <div className="add">
        <form className="lion"
          onSubmit={props.todosAdd}
        >
          <span>
            <textarea
              className="addTitle"
              type="text"
              name="title"
              placeholder="Назва todos"
            />
            <textarea
              className="addText"
              type="text"
              name="text"
              placeholder="Додаткові дані"
            />
          </span>
          <span>
            <button className="butAdd" type='submit'>Добавити</button>
          </span>
        </form>
      </div>
    );
}


export default AddTodo
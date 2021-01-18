import React from "react";
import Header from './todo/todoTitle'
import Todolist from './todo/todoList'
import AddTodo from './todo/addTodo'
import Modal from './modal/modal'


class App extends React.Component {
  state = {
    deleteTodos: undefined,
    isModalOpen: false,
    titleHed: "Список завдань",
    todos: [
      {
        id: 1,
        comleted: false,
        details: false,
        title: "Сходити в магазин",
        text:
          "З самого початку React був спроектований так, щоб його можна було впроваджувати поступово. Тобто ви можете додавати так мало або так багато React-у, як вам потрібно. Скористайтеся інформацією та посиланнями цього розділу, якщо просто бажаєте відчути React на смак або додаєте трохи “інтерактивності” до простої HTML-сторінки, чи, навіть, якщо стартуєте складний React-проект",
        date: new Date().toLocaleString(),
      },
      {
        id: 2,
        comleted: false,
        details: false,
        title: "Скачати фільм",
        text:
          "З самого початку React був спроектований так, щоб його можна було впроваджувати поступово. Тобто ви можете додавати так мало або так багато React-у, як вам потрібно. Скористайтеся інформацією",
        date: new Date().toLocaleString(),
      },
      {
        id: 3,
        comleted: false,
        details: false,
        title: "Навчитись кататись на ковзанах",
        text:
          "З самого початку React був спроектований так, щоб його можна було впроваджувати поступово. Тобто ви можете додавати так мало або так багато React-у, як вам потрібно. Скористайтеся інформацією",
        date: new Date().toLocaleString(),
      },

      {
        id: 4,
        comleted: false,
        details: false,
        title: "Створити сайт",
        text:
          "Якщо ви віддаєте перевагу вивченню основних концепцій крок за кроком, то найкраще почати з нашого посібника з основних понять. Кожен наступний розділ спирається на знання з попереднього, тому ви нічого не пропустите в процесі вивчення матеріалу.Філософія React. На багатьох користувачів “сходить осяяня” після знайомства з філософією React Можливо, цей документ допоможе розставити крапки над “і”. Напевно, це є найстаріший, досі актуальний, посібник по React.",
        date: new Date().toLocaleString(),
      },
      {
        id: 5,
        comleted: false,
        details: false,
        title: "Прочитати нову книгу",
        text:
          "Якщо ви віддаєте перевагу вивченню основних концепцій крок за кроком, то найкраще почати з нашого посібника з основних понять. Кожен наступний розділ спирається на знання з попереднього, тому ви нічого не пропустите в процесі вивчення матеріалу.Філософія React. На багатьох користувачів “сходить осяяня” після знайомства з філософією React Можливо, цей документ допоможе розставити крапки над “і”. Напевно, це є найстаріший, досі актуальний, посібник по React.",
        date: new Date().toLocaleString(),
      },
    ],
  };

  toggleTodo = (id) => {
    this.setState(
      this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.comleted = !todo.comleted;
        }
      })
    );
  };

  removeTodo2 = () => {
    const idTitle = this.state.deleteTodos;
    this.setState((this.state.todos = this.state.todos.filter((todo) => todo.title !== idTitle)));
    this.setState(
      ({deleteTodos: undefined })
    );
  };

  todosDetails = (title) => {
    this.setState(
      this.state.todos.map((todo) => {
        if (todo.title === title) {
          todo.details = !todo.details;
        }
      })
    );
  };

  openModal = (title) => {
    this.setState((state) => ({ isModalOpen: !state.isModalOpen }));
    console.log(title)
    if (title) {
      this.setState(
        ({deleteTodos: title })
      );
    }
  };

  myInput = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const text = e.target.elements.text.value;
    if (title.trim()) {
      this.setState(
        (this.state.todos[this.state.todos.length] = {
          id: new Date().getTime(),
          title: title,
          comleted: false,
          details: false,
          text: text,
          date: new Date().toLocaleString()
        })
      );
    }
    e.target.elements.title.value = "";
    e.target.elements.text.value = "";
  };

  render() {
    return (
      <>   
        <div className="wraper">
          <div className="hed">
            <Header title={this.state.titleHed} />
          </div>

          <AddTodo todosAdd={this.myInput} />

          {this.state.todos.length ? (
            <div>
              <Todolist
                todos={this.state.todos}
                onToggle={this.toggleTodo}
                todosDetails={this.todosDetails}
                openModal={this.openModal}
              />
            </div>
          ) : (
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              У вас немає завдань.
            </h1>
          )}
        </div>
        {this.state.isModalOpen && (
          <Modal
            openModal={this.openModal}
            removeTodo={this.removeTodo2}
            title={this.state.deleteTodos}
          />
        )}
      </>
    );
  }
}

export default App;

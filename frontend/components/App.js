import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0
let getId = () => ++id

const initialTodos = [
  { id: getId(), name: "Finish Module 1 project", completed: false },
  { id: getId(), name: "Complete Module 1 Project", completed: true},
  { id: getId(), name: "Start Module 2", completed: false }
]

export default class App extends React.Component {
  state = {
    todos: initialTodos
  }

  addTodo = (name) => {
    this.setState({
      // eslint-disable-next-line no-dupe-keys
      todos: this.state.todos.concat({ id: getId(), name, completed: false, name })
    })
  }

toggleCompletion = id => {
  this.setState({
    todos: this.state.todos.map(td => {
      if (id == td.id) return { ...td, completed: !td.completed }
      return td
    })
  })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
        <Form addTodo={this.addTodo} />
      </div>
    )
  }
}

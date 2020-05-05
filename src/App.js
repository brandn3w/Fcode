
import React from "react";
import Todo from "./components/Todo";

import todoData from "./components/todoData";
class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodo = prevState.todos.map(todo =>{
            if (todo.id = id) {
                todo.completed = !todo.completed
            }
                return todo

            })
            return {
                todos: updatedTodo
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <Todo key={item.id} item={item}
            handleChange={this.handleChange} /> )
        return (

            <div>
                {todoItems}
            </div>

        )
    }
}
export default App;
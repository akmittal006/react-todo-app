import React from 'react';
import AddTodoForm from '../components/AddTodoForm.js';
import Todo from '../components/Todo.js';

var id = 3;

var initialTodos = [
    // {
    //     title: "this is cool",
    //     id:1,
    //     status:"active",
    // },
    // {
    //     title: "done this",
    //     id:2,
    //     status:"completed",
    // }
];

export default class ToDoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: initialTodos,
        }
        this.changeTodoStatus = this.changeTodoStatus.bind(this);
    }

    addTodo(title) {
        this.state.todos.push({
            title: title,
            status: "active",
            id: id,

        });
        this.setState(this.state);
        id++;
    }

    changeTodoStatus = (index,status)=>{
        this.state.todos[index].status = status;
        this.setState(this.state);
    }

    removeTodo = (index)=> {
        this.state.todos.splice(index,1);
        this.setState(this.state);
    }

    render() {
        return (
            <div className="container">
                <h1>todos</h1>

                <div className="container-todo">
                    <AddTodoForm onAdd={this.addTodo.bind(this)} />

                    {
                        this.state.todos.map((todo,index) => {
                            return (<Todo 
                                        todo={todo} 
                                        key={todo.id} 
                                        index={index} 
                                        onStatusChange={(index,status)=>{this.changeTodoStatus(index,status)}}
                                        onRemoveTodo={this.removeTodo.bind(this)}
                                    />)

                        })
                    }
                </div>

            </div >

        )
    }

}
import React from 'react';

import Todo from './Todo';
import axios from 'axios';

class TodoList extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: [],
            markAsDone: ''
        }
    }
    
    componentDidMount() {
        this.getTodos();
    }

    getTodos(){
        axios.get('http://localhost:3001/getTasks').then(res => {
            this.setState({
                todos: res.data.tasks
            });
        }) 
        .catch((error) => {
            console.log("Error: " + error)
        });
    }

    markDone = (id) => {
        
    }

    render(){
        return (
            <table border="1" style={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Estado</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map((todo, i) => {
                        return (
                            <Todo key={todo.id} todo={todo} i={todo.id} getTodos={this.getTodos.bind(this)}/>
                        )
                    })}
                </tbody>
            </table>
        );
    }
    
    
}

export default TodoList;
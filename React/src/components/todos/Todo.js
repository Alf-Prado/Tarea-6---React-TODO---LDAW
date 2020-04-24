import React from 'react';
import axios from 'axios';

class Todo extends React.Component {

    constructor() {
        super()
        this.state = {
            status: '',
            task: null
        }
    }

    componentDidMount(){
        this.setState({
            status: this.props.todo.status
        });
    }

    markDone = (event, id) => {
        this.setState({
            status: 'done'
        });

        this.task = {
            id: id
        }

        axios.post('http://localhost:3001/updateTaskStatus/${id}', this.task).then(res => {
            this.props.getTodos();
            console.log("La tarea se actualizo. Id: " + this.task.id);;
        })
        .catch((error) => {
            console.log("Error: " + error)
        }); 
    }

    deleteTask = (event, id) => {
        this.task = {
            id: id
        }

        axios.post('http://localhost:3001/deleteTask/${id}', this.task).then(res => {
            this.props.getTodos();
        })
        .catch((error) => {
            console.log("Error: " + error)
        });
    }

    render(){ 
        return (
            <tr key={this.props.i} style={{backgroundColor: this.state.status == 'pending' ? 'green' : 'grey'}}>
                <td>#{this.props.i}</td>
                <td>{this.props.todo.description}</td>
                <td>
                    {this.state.status == 'pending' && (
                    <input type="button" value="Terminar" onClick={(event) => this.markDone(event, this.props.i)}/>
                    )}
                    {this.state.status == 'done' && (
                    <a>Completa</a>
                    )}

                </td>
                <td>
                    <input type="button" value="X" onClick={(event) => this.deleteTask(event, this.props.i)}/>
                </td>
            </tr>
        );
    }
    
    
}

export default Todo;
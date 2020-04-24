import React from 'react';
import axios from 'axios';

class Create extends React.Component {

    constructor(){
        super()
        this.state = {
            task: null,
            description: ''
        }
    }
    
    todoChange = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    todoCreate = () =>{
        
        this.task = {
            description: this.state.description
        }

        axios.post('http://localhost:3001/tasks', this.task).then(res => {
            this.props.updateTodos();
        })
        .catch((error) => {
            console.log("Error: " + error)
        });
    }

    render(){ 
        return (
            <div>
                <h4>New Task</h4>
                <input 
                    type="text" 
                    name='description'
                    onChange={(event) => this.todoChange(event)}/>
                <input 
                    type="button" 
                    value="Create" 
                    onClick={this.todoCreate}/>
            </div>
        );
    }
}

export default Create;

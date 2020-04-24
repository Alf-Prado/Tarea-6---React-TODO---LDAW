import React from 'react';
import './App.css';

import Create from './components/todos/Create';
import TodoList from './components/todos/TodoList';

class App extends React.Component{

  constructor(){
    super()
    this.child = React.createRef();    
  }

  //Calls the TodoList getTodos() method to get the new created value
  updateTodos = () =>{
    this.child.current.getTodos();
  }

  render(){
    return (
      <div className="App">
        <Create updateTodos={this.updateTodos}/>
        <br></br>
        <TodoList ref={this.child} todos={this.todos}/>
      </div>
    );
  }
}

export default App;



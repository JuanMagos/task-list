import React, {Component} from 'react';
import './task-form.css';

class TaskForm extends Component {
    constructor(){
    super();
    this.addTask = this.addTask.bind(this)
    }

    addTask(){

    }
    render(){
        return (
            <div className="taskForm">
            <input ref={input =>{this.textInput = input;}} onClick={this.addTask} type="text"/>
            <button>Crear</button>
            </div>
        )
    }
}

export default TaskForm;
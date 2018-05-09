import React, {Component} from 'react';
import './task-form.css';

class TaskForm extends Component {
    constructor(){
    super();
    this.addTask = this.addTask.bind(this)
    }

    addTask(){
        this.props.addTask(this.textInput.value)
    }
    render(){
        return (
            <div className="taskForm">
            <input ref={input =>{this.textInput = input;}} type="text"/>
            <button onClick={this.addTask} >Crear</button>
            </div>
        )
    }
}

export default TaskForm;
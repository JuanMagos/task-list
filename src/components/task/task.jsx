import React, {Component} from 'react';
import './task.css';

class Task extends Component {
    constructor(props){
        super(props);
        this.taskContent = props.taskContent;
        this.taskId = props.taskId;

    }

    handleRemove(id){
        this.props.removeTask(id);
    }
    render(){
        return(
        <div className="Task">
        <span
        onClick={()=>this.handleRemove(this.taskId  )}
        >&times;</span>
        <p>{this.taskContent}</p>
        </div>)
    }
}

export default Task;
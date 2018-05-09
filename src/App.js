import React, { Component } from 'react';
import './App.css';
import Task from './components/task/task.jsx'
import TaskForm from './components/task-form/task-form'

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks:[
        {taskId:1, taskContent: 'tarea1'},
        {taskId:2, taskContent: 'tarea2'}

      ]
    };
    this.addTask = this.addTask.bind(this);
  }

  removeTask(){

  }

  addTask(task){
    let {tasks} = this.state;
    tasks.push({
      taskId: tasks.length + 1,
      taskContent: task
    });
    this.setState({tasks})
  }
  render() {
    return (
      <div className="taskContainer">

        <div className="tasksHeader">
          <h1>Quiero dormir</h1>  
        </div>
        <div className="tasksBody">
        <ul>
        {
          this.state.tasks.map(task => {
            return (
              <Task 
              taskContent={task.taskContent}
              taskId={task.taskId}
              key={task.taskId}
              />
            )
          })
        }
        </ul>
        </div>
        <div className="tasksFooter">
          <TaskForm addTask={this.addTask}/>
        </div>  
      </div>
    );
  }
}

export default App;

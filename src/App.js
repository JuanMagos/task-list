import React, { Component } from 'react';
import './App.css';

import firebase from 'firebase';
import {DB_CONFIG} from './config/config';
import 'firebase/database';

import Task from './components/task/task.jsx'
import TaskForm from './components/task-form/task-form'

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks:[]
    };

    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('tasks');

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);

  }

  componentDidMount (){
    const { tasks } = this.state;
    this.db.on('child_added', snap => {
      tasks.push({
        taskId: snap.key,
        taskContent: snap.val().taskContent
      })
      this.setState({tasks});
    });
    this.db.on('child_removed', snap => {
      for(let i = 0; i< tasks.length; i++){
        if(tasks[i].taskId= snap.key){
        tasks.splice(i, 1);
        }
      }
this.setState({tasks});
    });
  }

  removeTask(taskId){
    this.db.child(taskId).remove();
  }

  addTask(task){
    this.db.push().set({taskContent: task})
  }
  render() {
    return (
      <div className="taskContainer">

        <div className="tasksHeader">
          <h1>Lista de tareas</h1>  
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
              removeTask={this.removeTask}
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

import React from 'react'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList'


function App() {
  return (
    <div className="row p-3">
      <div className="col-md-6 offset-3">
        <div className="card">
          <div className="card-header py-3">
            <AddTask/>
          </div>
          <div className="card-body">
            <TaskList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import React from 'react';
import './App.css';
import Main from './components/Main/Main';

class  App extends React.Component {

  state = {
    courses:[
      {id:'1',name:'PHP'}
    ]
  }

  addCourse = (name) => {
    let state = this.state.courses;
    const result = state.find( course => course.name === name.toUpperCase());

    if (!result) {
      this.setState({
        courses: [
          ...state,
          {
            id: this.state.courses.length + 1,
            name: name.toUpperCase()
          }
        ]
      })
    }
    else {
      alert(name + ' Already exist!')
    }
  }

  updateCourse = (prevName, newName) => {
    let state = this.state.courses;
    const result = state.find( course => course.name.toLowerCase() === newName.toLowerCase());
    if (!result) {
      let newState = state.filter( course => {
        if (course.name === prevName) {
          course.name = newName.toUpperCase();
          return course;
        }
        else {
          return course;
        }
      });
  
      this.setState({
        courses: newState
      })
    }
    else {
      alert(newName + ' Already Exist !');
    }
    
  }

  handleDelete = (id) => {
    let state = this.state.courses;
    const newState = state.filter( course => {
      return course.id != id;
    });
    this.setState({
      courses: newState
    })
  }

  render() {
    return (
      <div>
        <Main handleDelete={this.handleDelete} addCourse={this.addCourse} updateCourse={this.updateCourse} courses={this.state.courses} />
      </div>
    );
  } 
}

export default App;

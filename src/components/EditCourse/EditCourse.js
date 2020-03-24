import React from 'react';
import './EditCourse.css';
import UdateCourse from '../UpdateCourse/UpdateCourse';

class EditCourse extends React.Component {
    
    state = {
        name: '',
        clicked: false
    };

    handleClick = (name) => {
        this.setState({
            name: name,
            clicked: 'true'
        });
    }

    handleDelete = (id) => {
        this.props.handleDelete(id);
    }

    updated = () => {
        this.setState({
            clicked: false
        })
    }

    render(){

        const courses = this.props.courses.map(course => {
            return(
                <div key={course.id} className="child">
                    <div className="group">
                        <label>{course.name}</label>
                        <button onClick={() => this.handleClick(course.name)} className="edit">Edit Course</button>
                    </div>
                    <button onClick={() => this.handleDelete(course.id)} className="delete">Delete Course</button>
                </div>
            );
        });

        if (this.state.clicked === false) {
            return(
                <React.Fragment>{courses}</React.Fragment>
            )  
        }
        else {
            return (
                <UdateCourse name={this.state.name} handleDelete={this.props.handleDelete} updateCourse={this.props.updateCourse} courses={this.props.courses} />
            )   
            
        }
        
    }
}

export default EditCourse;
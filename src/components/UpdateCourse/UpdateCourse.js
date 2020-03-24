import React from 'react';
import EditCourse from '../EditCourse/EditCourse';


class UdateCourse extends React.Component {

    state ={
        name: this.props.name,
        updated: false
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateCourse(this.props.name, this.state.name);
        this.setState({
            updated: true
        })
    }

    render(){
        if (!this.state.updated) {
            return(
                <form className="child" onSubmit={this.handleSubmit}>
                    <input required onChange={this.handleChange} value={this.state.name} type="text" autoFocus />
                    <input type="submit" value="Update Course" />
                </form>
            ); 
        }
        else {
            return(
                <EditCourse updateCourse={this.props.updateCourse} courses={this.props.courses} handleDelete={this.props.handleDelete}  />
            )
        }
         
    }
}

export default UdateCourse;
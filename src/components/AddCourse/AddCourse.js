import React from 'react';
import './AddCourse.css';


class AddCourse extends React.Component {

    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCourse(this.state.name);
    }

    render(){
        return(
            <form className="child" onSubmit={this.handleSubmit}>
                <input required onChange={this.handleChange} type="text" autoFocus placeholder="Enter Course Name..." />
                <input type="submit" value="Add Course" />
            </form>
        );
    }
}

export default AddCourse;
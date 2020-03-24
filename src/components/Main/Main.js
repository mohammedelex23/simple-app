import React from 'react';
import './Main.css';
import AddCourse from '../AddCourse/AddCourse';
import EditCourse from '../EditCourse/EditCourse';

function Main({courses, addCourse, updateCourse, handleDelete}) {
    return(
        <div className="container">
            <div className="header">
                <h1>Add Course</h1>
            </div>
            <AddCourse addCourse={addCourse} courses={courses} />
            <div className="fix">
            <EditCourse addCourse={addCourse} updateCourse={updateCourse} courses={courses} handleDelete={handleDelete} />
            </div>
        </div>
    );
}

export default Main;
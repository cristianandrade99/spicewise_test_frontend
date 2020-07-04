import React from 'react';

import './App.css'

const Task = props => {

    const onUpdatePress = () => {
        props.onUpdate(props.task.id);
    };

    const onDeletePress = () => {
        props.onDelete(props.task.id);
    };

    return (
        <div className="taskComponent">
            <p className={'taskText ' + (props.task.item ? props.task.item : 'secondary')}>{props.task.description}</p>
            <button className="updateButton" onClick={onUpdatePress}> Update </button>
            <button className="deleteButton" onClick={onDeletePress}> Delete </button>
        </div>
    );
};

export default Task;
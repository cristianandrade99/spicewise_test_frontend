import React from 'react';

let item = '';
let description = '';

const UpdatePanel = props => {

    const onItemChanged = (event) => {
        item = event.target.value;
    };

    const onDescriptionChanged = (event) => {
        description = event.target.value;
    };

    const onModificarPress = () => {
        props.onModificar(props.task.id, item, description);
    };

    return (
        <div className="updatePanel">
            <p className="updateTitles">
                Item
            </p>
            <input
                className={"inputUpdateItem"}
                onChange={onItemChanged} />
            <p className="updateTitles">
                Description
            </p>
            <input
                className={"inputUpdateDescription"}
                onChange={onDescriptionChanged} />
            <button
                className="ModificarButton"
                onClick={onModificarPress}> Actualizar
            </button>
        </div>
    );
};

export default UpdatePanel;
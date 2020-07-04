import React, { useState } from 'react';
import Task from './Task'
import UpdatePanel from './UpdatePanel'
import API from './ApiMethods'
import './App.css';

let updatePanelVar = <UpdatePanel />;

let descripcionActual = '';
let itemActual = '';
const listaItems = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const onTaskinputChange = (event) => {
  descripcionActual = event.target.value;
  itemActual = '';
  listaItems.forEach((item) => {
    if (descripcionActual.indexOf(item) !== -1) {
      itemActual = item;
    }
  })
  if (itemActual === '') {
    itemActual = 'secondary';
  }
  descripcionActual = descripcionActual.replace(itemActual, '');
};

function App() {
  const [listaTareas, setListaTareas] = useState([]);
  const [showUpdatePanel, setshowUpdatePanel] = useState(false);

  const updateTasksList = async () => {
    const allBackTasks = await API.getAlltasks();
    const listaTaksReact = allBackTasks.map((task) =>
      <Task
        key={task.id}
        onUpdate={onUpdatePress}
        onDelete={onDeletePress}
        task={task} />
    );
    setListaTareas(listaTaksReact);
  };

  const onDeletePress = async (id) => {
    await API.deleteDBItem(id);
    updateTasksList();
  };

  const onModificarPress = async (id, item, description) => {
    await API.updateDBItem({
      "id": id,
      "item": item,
      "description": description
    });
    setshowUpdatePanel(false);
    updateTasksList();
  };

  const onUpdatePress = async (id) => {
    const task = await API.getDBItem(id);
    updatePanelVar = <UpdatePanel
      task={task}
      onModificar={onModificarPress} />;
    setshowUpdatePanel(true);
  };

  const onAgregarPress = async (event) => {
    const newItem = {
      "item": itemActual,
      "description": descripcionActual
    };
    await API.createDBItem(newItem);
    updateTasksList();
  };

  return (
    <div className="container">
      <div className="taskListPanel">
        <h1 className="whiteText">
          Bienvenido a tu lista de tareas
            </h1>
        {listaTareas}
      </div>
      <div className="addTaskPanel">
        <h1 className="whiteText">
          Tarea
            </h1>
        <input className="inputDescription" onChange={onTaskinputChange} />
        <button className="agregarButton" onClick={onAgregarPress}> Agregar </button>
        {showUpdatePanel ? updatePanelVar : <div></div>}
      </div>
    </div>
  );
}

export default App;

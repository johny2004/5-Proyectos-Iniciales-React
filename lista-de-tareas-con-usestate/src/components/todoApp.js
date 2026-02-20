import { useState } from "react";
import Todo from "./todo";
import "./todoApp.css";

export default function TodoApp() {
  const [title, setTitle] = useState("Hola Mundo"); //el primero es un getter y el otro es un setter
  const[todos, setTodos] = useState([]);    //es un arreglo


  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo ={
        id: crypto.randomUUID(),
        title: title,
        completed: false
    };
    
    const temp= [...todos];//copia
    temp.unshift(newTodo);//unshift agrega un elemento al inicio del arreglo
    
    setTodos(temp)    //no se puede actualizar directamente el estado, se debe utilizar la funcion setTodos para actualizar el estado

    setTitle(""); //limpiar el input despues de agregar una tarea
  }

  function handleUpdate(id, value){
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title =value;
    setTodos(temp);
  }

  function handleDelete(id){
    const temp= todos.filter(item => item.id !== id);

    setTodos(temp);

  }
  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="Submit"
          value="Crear Tarea"
          className="buttonCreate"
        />

    
      </form>
      <div className="todosContainer">
      {
        todos.map((item)=>(
            <Todo key ={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
        ))}
        </div>
    </div>
  );

}
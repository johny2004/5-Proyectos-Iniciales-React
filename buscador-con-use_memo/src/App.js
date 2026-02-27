import { useState } from "react";
import SearchBar from "./components/searchBar";

import styled from "styled-components";

const Button =styled.button `
padding: 10px;
border-radius: 5px;
border: none;
background-color: white;
border: solid 1px black;
cursor:pointer;

&:hover {
    background-color: #efefef;
   
}
`;

const people = [
  {
    id: "people-01",
    title: "Juan Perez",
  },
  { id: "people-02", title: "Maria Gomez" },
  {
    id: "people-03",
    title: "Carlos Sanchez",
  },
  { id: "people-04", title: "Ana Rodriguez" },
  { id: "people-05", title: "Luis Martinez" },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Reunión de equipo",
  },
  {
    id: "calendar-02",
    title: "Presentación del proyecto",
  },
  {
    id: "calendar-03",
    title: "Cita con el cliente",
  },
  { id: "calendar-04", title: "Revisión de código" },
];

const emails = [
  {
    id: "email-01",
    title: "Correo de Juan",
  },
  {
    id: "email-02",
    title: "Correo de Maria",
  },
  {
    id: "email-03",
    title: "Correo de Carlos",
  },
  { id: "email-04", title: "Correo de Ana" },
  {
    id: "email-05",
    title: "Correo de Luis",
  },
];
function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  function handleClickl(e) {
    const option = e.target.name;

    switch (option) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;
      case "calendar":
        setData(calendar);
        setCurrentOption("calendar");
        break;
      case "emails":
        setData(emails);
        setCurrentOption("emails");
        break;
      default:
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
    }
  }

  function handleItemSelected(item) {
    setSelection(item);
  }
  return (
    <div>
      <div>
        <Button onClick={handleClickl} name="all">
          All
        </Button>
        <Button onClick={handleClickl} name="people">
          People
        </Button>
        <Button onClick={handleClickl} name="calendar">
          {" "}
          Calendar{" "}
        </Button>
        <Button onClick={handleClickl} name="emails">
          {" "}
          Emails{" "}
        </Button>
      </div>
      {selection ? <div>Seleccionado: {selection.title}</div> : <div>No hay selección</div>}
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;

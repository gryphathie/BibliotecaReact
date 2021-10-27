import React, { useState } from 'react';
import Tabla from './Tabla';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Books from './data.json';
import logo from './../images/logo.png';


const Biblioteca = () => {
  const [datos, setDatos] = useState(Books.map((libro) => libro));
  const selectId = Books.map((ids) =>
    <option>{ids.id}</option>
    );

  const [matricula, setMatricula] = useState("");
  const [book, setBook] = useState(0);

  let retorno = 100 * 60 * 60 * 24 * 100;
  let hoy = new Date(),
    fecha = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear(),
    proximo = (hoy.getTime() + retorno);
  let endDate = new Date(proximo),
    fin = endDate.getDate() + '/' + (endDate.getMonth() + 1) + '/' + endDate.getFullYear();

  const onChange = (e) => {
    if (e.target.name === "matricula"){
      setMatricula(e.target.value)
    } else if (e.target.name === "id_book"){
      setBook(e.target.value)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const intBook = Number(book);
    const order = datos.find(bk => bk.id === intBook);
    if (order.borrowed === true){
      alert("El libro no esta disponible")
    }else if (order.borrowed === false && matricula !== ""){
      alert("Se aparto el libro con exito!")
      const newDatos = [...datos];
      const dato = newDatos.find((dato) => dato.id === intBook);
      dato.init_date = fecha;
      dato.end_date = fin;
      dato.status = "En tiempo";
      dato.taken_by = matricula;
      dato.borrowed = !dato.borrowed;
      setDatos(newDatos);
    } else {
      alert("Datos incorrectos o incompletos")
    }
  }


  return(
    <>
    <div className="container mt-2">
      <div className="d-flex justify-content-center">
        <img className="rounded-circle" src={logo} width = "10%" />
      </div>
    </div>
    <div className="align-self-center py-2">
    <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded mx-5">
      <h2 className="text-center"> Biblioteca Virtual </h2>
      <span className="border-bottom border-info"></span>
      <br/>
      <h3 className="text-center"> Lista de libros: </h3>
      <span className="border-bottom mx-5 "></span>

      <div className="pt-2">
        <Tabla datos={datos}/>
      </div>

      <span className="border-bottom border-info"></span>
      <div className="row py-3">
        <div className="col">
        </div>
        <div className="col">
          <div className="card border border-2 shadow p-4 bg-light">
            <span className="border-bottom border-info">
            <h3 className="text-center">Apartar libro</h3>
            </span>
            <br/>
            <Form onSubmit={onSubmit}>
            <Form.Group size="lg">
              <Form.Label>Matrícula: </Form.Label>
              <Form.Control
                autoFocus
                name="matricula"
                type="text"
                maxlength = "6"
                onChange={onChange}
                />
                <br/>
            </Form.Group>
            <label>Selecciona el id del libro: </label>
            <select className="form-control" name="id_book" onChange={onChange}>
              <option> </option>
              {selectId}
            </select>
            <div className="d-flex justify-content-center py-3">
            <Button variant="info" block size="lg" type="submit"> Solicitar </Button>
            </div>
            </Form>
          </div>
        </div>
        <div className="col">
        </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Biblioteca;

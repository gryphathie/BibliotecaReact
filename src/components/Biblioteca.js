import React, { useState } from 'react';
import Tabla from './Tabla';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Biblioteca = () => {
  return(
    <>
    <div className="align-self-center py-2">
    <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded m-5">
      <h2> Biblioteca Virtual </h2>
      <br/>
      <h3> Lista de libros: </h3>
    </div>
    <form>
      <label> Matricula: </label>
      <input type="text" id="matricula">
      <br/>
      <label> Fecha a solicitar: </label>
      <input type="date" id="date">
      <br/>
      <label> ID del libro a solicitar: </label>
      <select id="id_libro">
        <option> </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </form>
    </div>
    </>
  );
}

export default Biblioteca;

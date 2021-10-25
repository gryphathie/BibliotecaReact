import React from 'react';
import { bookData } from './data';
import Lista from './Lista';

const Tabla = () => {
  return (
    <>
    <table className="table table-bordered" id="tablaGastos">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Titulo</th>
          <th scope="col">Fecha inicio:</th>
          <th scope="col">Fecha fin:</th>
          <th scope="col">Estado</th>
          <th scope="col">Matricula</th>
          <th scope="col">Prestado</th>
        </tr>
      </thead>
      <tbody>
        <Lista />
      </tbody>
    </table>
    </>
  );
}
export default Tabla;

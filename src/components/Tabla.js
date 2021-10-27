import React from 'react';
import Libros from './Libros';

const Tabla = ({datos}) => {
  return (
    <>
    <table className="table table-bordered table-light" id="tablaGastos">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Titulo</th>
          <th scope="col">Fecha prestamo</th>
          <th scope="col">Fecha retorno</th>
          <th scope="col">Estado</th>
          <th scope="col">Matricula</th>
          <th scope="col">Prestado</th>
        </tr>
      </thead>
      <tbody>
        <Libros datos={datos}/>
      </tbody>
    </table>
    </>
  );
}
export default Tabla;

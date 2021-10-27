import React, { useState, useEffect } from 'react';
import Books from './data.json';

const Libros = ({ datos }) => {
  const data = datos.map((book) =>
      <>
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>{book.init_date}</td>
        <td>{book.end_date}</td>
        <td>{book.status}</td>
        <td>{book.taken_by}</td>
        <td>{book.borrowed? 'Si' : 'No'}</td>
      </tr>
      </>
  
  )


  return (
    <>
    {data}
    </>
  );
}

export default Libros;

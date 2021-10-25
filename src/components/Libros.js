import React from 'react';
import { bookData } from './data';

const Libros = ({id, name, init_date, end_date, status, taken_by, borrowed}) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{init_date}</td>
      <td>{end_date}</td>
      <td>{status}</td>
      <td>taken_by</td>
      <td>borrowed</td>
    </tr>
  );
}
export default Libros;

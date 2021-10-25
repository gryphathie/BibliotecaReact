import React from 'react';

const Lista = () => {
  const libros = [
    {"id": 1, "name":"Harry Potter y la Piedra Filosofal", "init_date": "25/10/2021", "end_date": "04/11/2021", "status": "En tiempo", "taken_by": "112233", "borrowed": true},
    {"id": 2, "name":"El Señor de los Anillos", "init_date": "", "end_date": "", "status": "En estante", "taken_by": "", "borrowed": false},
    {"id": 3, "name":"El Alquimista", "init_date": "", "end_date": "", "status": "En estante", "taken_by": "", "borrowed": false},

  ]
  return(
    {libros.map((data)=>{
      return(
        <>
        <tr>
          <td></td>
        </tr>
        </>
      );
    })}
  );
}
export default Lista;

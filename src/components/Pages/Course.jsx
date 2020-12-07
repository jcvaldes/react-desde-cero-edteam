import React from 'react';
import { Link } from 'react-router-dom';
const cursos = [
  {
    id: 1,
    titulo: 'Consumiendo APIs con Blazor',
    image:
      'https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png',
    price: 70,
    profesor: 'Beto Quiroga',
  },
  {
    id: 2,
    titulo: 'Scripting - Bash / Shell',
    image:
      'https://edteam-media.s3.amazonaws.com/courses/medium/bdf0b692-eef2-411b-8502-56d1d93fa85d.png',
    price: 40,
    profesor: 'Diego Blas',
  },
  {
    id: 3,
    titulo: 'Consumiendo APIs con Blazor',
    image:
      'https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png',
    price: 20,
    profesor: 'Beto Quiroga',
  },
  {
    id: 4,
    titulo: 'Consumiendo APIs con Blazor',
    image:
      'https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png',
    price: 50,
    profesor: 'Beto Quiroga',
  },
];
const Course = ({ match }) => {
  const cursoActual = cursos.find(c => c.id === parseInt(match.params.id));

  return (
    <div className="ed-grid m-grid-3">
      {
        cursoActual 
          ? (
            <>
            <h1 className="m-cols-3">{cursoActual.titulo}</h1>
            <img
              className="m-cols-1"
              src={cursoActual.image}
              alt={cursoActual.titulo}
            />
            <p className="m-cols-2">Profesor: {cursoActual.profesor}</p>
            </>
          )
          : <h1>Course no existe</h1>
      }

    </div>
  );
};
export default Course;

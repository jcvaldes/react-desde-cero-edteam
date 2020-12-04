import React from 'react'
import { Curso } from './Curso'
const cursos = [
  {
    "id": 1,
    "titulo": "Consumiendo APIs con Blazor",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png",
    "price": 70,
    "profesor": "Beto Quiroga"
  }, 
  {
    "id": 2,
    "titulo": "Scripting - Bash / Shell",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/bdf0b692-eef2-411b-8502-56d1d93fa85d.png",
    "price": 40,
    "profesor": "Diego Blas"
  },
  {
    "id": 3,
    "titulo": "Consumiendo APIs con Blazor",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png",
    "price": 20,
    "profesor": "Beto Quiroga"
  },
  {
    "id": 4,
    "titulo": "Consumiendo APIs con Blazor",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png",
    "price": 50,
    "profesor": "Beto Quiroga"
  },
]
export const CursoGrid = () =>  (
    <div>
      <div className="ed-grid m-grid-4">
        { cursos.map(c => (
            <Curso 
              key={c.id}
              title={c.title}
              price={c.price}
              image={c.image}
              profesor={c.profesor} />
          )) }      
      </div>
    </div>
  )

export default CursoGrid
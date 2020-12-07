import React from 'react'
import { CourseCard } from '../Molecules/CourseCard'
const courses = [
  {
    "id": 1,
    "titulo": "Consumiendo APIs con Blazor",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png",
    "price": 70,
    "teacher": "Beto Quiroga"
  }, 
  {
    "id": 2,
    "titulo": "Scripting - Bash / Shell",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/bdf0b692-eef2-411b-8502-56d1d93fa85d.png",
    "price": 40,
    "teacher": "Diego Blas"
  },
  {
    "id": 3,
    "titulo": "Consumiendo APIs con Blazor",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png",
    "price": 20,
    "teacher": "Beto Quiroga"
  },
  {
    "id": 4,
    "titulo": "Consumiendo APIs con Blazor",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png",
    "price": 50,
    "teacher": "Beto Quiroga"
  },
]
export const CourseGrid = () =>  (
    <div>
      <div className="ed-grid m-grid-4">
        { courses.map(c => (
            <CourseCard 
              key={c.id}
              id={c.id}
              titulo={c.titulo}
              price={c.price}
              image={c.image}
              teacher={c.teacher} />
          )) }      
      </div>
    </div>
  )

export default CourseGrid
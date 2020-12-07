import React, { useState } from 'react';

const Course = ({ match }) => {
  const [state, setState] = useState({
    course: {
      "id": 1,
      "title": "React desde Cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png",
      "price": 44,
      "teacher": "Juan Carlos"
    }
  })
  const { title, teacher, image } = state.course;
  return (
    <div className="ed-grid m-grid-3">
      {
        title 
          ? (
            <>
            <h1 className="m-cols-3">{title}</h1>
            <img
              className="m-cols-1"
              src={image}
              alt={title}
            />
            <p className="m-cols-2">Profesor: {teacher}</p>
            </>
          )
          : <h1>Course no existe</h1>
      }

    </div>
  );
};
export default Course;

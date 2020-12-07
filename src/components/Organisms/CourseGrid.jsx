import React from 'react';
import withLoader from '../HOC/withLoader';
import { CourseCard } from '../Molecules/CourseCard';

const CourseGrid = ({ courses }) => {
  return (
    <div className="ed-grid m-grid-4">
      {courses.length === 0 ? (
        <h1 className="t3">Cargando...</h1>
      ) : (
        courses.map((c) => (
          <CourseCard
            key={c.id}
            id={c.id}
            titulo={c.titulo}
            price={c.price}
            image={c.image}
            teacher={c.teacher}
          />
        ))
      )}
    </div>
  );
};

// export default withLoader("courses", CourseGrid);
export default  withLoader("courses")(CourseGrid) 

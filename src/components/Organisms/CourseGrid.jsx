import React, { Component } from 'react';
import { CourseCard } from '../Molecules/CourseCard';
import axios from 'axios';
export class CourseGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/jcvaldes/apifake/courses')
      .then(({ data }) => this.setState({ courses: data }))
      .catch((err) => this.setState({ courses: [] }));
  }
  render() {
    const { courses } = this.state;
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
  }
}

export default CourseGrid;

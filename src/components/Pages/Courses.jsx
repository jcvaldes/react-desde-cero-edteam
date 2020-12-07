import React, { Component } from 'react';
import axios from 'axios';
import CourseGrid from '../Organisms/CourseGrid';
export class Courses extends Component {
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
    return (<CourseGrid courses={courses} /> );
  }
}

export default Courses;

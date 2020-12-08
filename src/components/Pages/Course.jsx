import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Course = ({ match }) => {
  const [course, setCourse] = useState({})
  const [comment, setComment] = useState('Sin comentarios')
  // se desencadena infinitamente
  // useEffect(() => {
  //   console.log('hola')
  //   axios
  //     .get(`https://my-json-server.typicode.com/jcvaldes/apifake/courses/${ match.params.id }`)
  //     .then(resp  => setCourse(resp.data))
  // })
  useEffect(() => {
    // console.log('hola')
    axios
      .get(
        `https://my-json-server.typicode.com/jcvaldes/apifake/courses/${match.params.id}`
      )
      .then((resp) => setCourse(resp.data))
  }, [match.params.id]) //cuando se cambia de id entonces llama a la peticion

  const addComment = (e) => setComment(e.target.value)
  // similar al componentDidMount
  const { title, teacher, image } = course
  return (
    <div className="ed-grid m-grid-3">
      {course ? (
        <div className="ed-grid">
          <div className="l-block">
            <h1 className="m-cols-3">{title}</h1>
            <img className="m-cols-1" src={image} alt={title} />
            <p className="m-cols-2">Profesor: {teacher}</p>
          </div>
          <div className="ed-grid">
            <h2>Escribe tu comentario</h2>
            <input
              type="text"
              placeholder="Escribe ..."
              onChange={addComment.bind(this)}
            />
            <p>{comment}</p>
          </div>
        </div>
      ) : (
        <h1>Course no existe</h1>
      )}
    </div>
  )
}
export default Course

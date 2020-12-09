import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useCourse = (id) => {
  const [course, setCourse] = useState({})

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/jcvaldes/apifake/courses/${id}`
      )
      .then((resp) => setCourse(resp.data))
  }, [id]) //cuando se cambia de id entonces llama a la peticion

  return course
}

export default useCourse

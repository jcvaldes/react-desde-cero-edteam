import { useEffect, useState } from 'react'

const useFetch = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const getData = () => {
    setLoading(true)
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      })
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // se ejecuta la primera vez que se renderea
  return {
    data,
    error,
    loading
  }
}

export default useFetch
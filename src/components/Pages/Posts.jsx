import React from 'react'
import useCounter from '../CustomHooks/useCounter'
import useFetch from '../CustomHooks/useFetch'

const Posts = () => {
  const posts = useFetch('https://jsonplaceholder.typicode.com/posts', [])
  const counterOne = useCounter()
  return (
    <>
      <div>
        {counterOne.count}
        <br />
        <button onClick={counterOne.increase}>Incrementar</button>
        <button onClick={counterOne.decrease}>Disminuir</button>
      </div>
      <div className="data">
        <ul>
          {posts.loading && <p>Cargando...</p>}
          {posts.data && posts.data.map((p) => <li key={p.id}>{p.title}</li>)}
        </ul>
      </div>
    </>
  )
}

export default Posts

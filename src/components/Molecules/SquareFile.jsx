import React from 'react'
import withFileUpload from '../HOC/withFileUpload'
import './SquareFile.scss'
const SquareFile = (props) => (
  <div className="m-grid-2 ">
    <form>
      <input type="file" onChange={props.addFile} />
    </form>
    {
      // console.log(props.files)
    props.files.map((file, index) => {
      return (
        <div className="square" key={index}>
          <img src={file} alt="imagen" />
        </div>
      )
    })}
  </div>
)

export default withFileUpload(SquareFile)

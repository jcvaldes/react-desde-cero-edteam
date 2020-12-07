import React from 'react';
import withFileUpload from '../HOC/withFileUpload';

const SquareFile = (props) => (
  <div className="square">
    <form>
      <input type="file" onChange={props.addFile} />
    </form>
    {
      // console.log(props.files)
    props.files.map((file, index) => {
      debugger;
      return (
        <div className="image">
          <img src={file} key={index} alt="imagen" />
        </div>
      );
    })}
  </div>
);

export default withFileUpload(SquareFile);

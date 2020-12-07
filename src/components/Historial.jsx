import React from 'react';

const Historial = ({ match, location, history }) => {
  return (
    <>
      <div>{JSON.stringify(match)}</div>
      <div>{JSON.stringify(location)}</div>
      <div>{JSON.stringify(history)}</div>
    </>
  );
};

export default Historial;

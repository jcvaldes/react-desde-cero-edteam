import React from 'react';

const History = ({ match, location, history }) => {
  return (
    <>
      <div>{JSON.stringify(match)}</div>
      <div>{JSON.stringify(location)}</div>
      <div>{JSON.stringify(history)}</div>
    </>
  );
};

export default History;

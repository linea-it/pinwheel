import React from 'react';
import { useParams } from 'react-router-dom';

function Process() {
  const { id } = useParams();

  return (
    <div>
      <h1>{`Process ${id}`}</h1>
    </div>
  );
}

export default Process;

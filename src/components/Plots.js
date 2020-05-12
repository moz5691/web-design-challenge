import React from 'react';
import { useParams } from 'react-router-dom';
import Summary from './Summary';

const Plots = () => {
  const { name } = useParams();
  return (
    <div style={{ margin: '60px' }}>
      <Summary plotchoice={name} />
    </div>
  );
};

export default Plots;

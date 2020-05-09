import React, { useState } from 'react';
import Summary from './Summary';
import Visualization from './Visualization';
import { Grid } from 'semantic-ui-react';

const Home = ({ description }) => {
  const [plotchoice, setPlotchoice] = useState('Intro');

  const handlePlotchoice = (name) => setPlotchoice(name);

  return (
    <Grid container columns={2} stackable relaxed="very" stretched>
      <Grid.Column width={9}>
        <Summary plotchoice={plotchoice} description={true} />
      </Grid.Column>

      <Grid.Column width={7}>
        <Visualization handlePlotchoice={handlePlotchoice} />
      </Grid.Column>
    </Grid>
  );
};

export default Home;

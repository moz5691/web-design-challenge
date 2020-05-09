import React from 'react';
import { Grid, Image, Segment, Divider } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Comparison = () => {
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2 class="ui header teal">Comparison: Latitude vs X</h2>
      <Divider />
      <h4 class="ui header"> Click on a plot to get an in-depth analysis.</h4>
      <Grid columns={2} stackable>
        <Grid.Column>
          <Segment vertical>
            <Image
              src="assets/img/Fig1.png"
              onClick={() => routeChange('/plots/MaxTemp')}
            />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment vertical>
            <Image
              src="assets/img/Fig2.png"
              onClick={() => routeChange('/plots/Humidity')}
            />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment vertical>
            <Image
              src="assets/img/Fig3.png"
              onClick={() => routeChange('/plots/Cloudiness')}
            />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment vertical>
            <Image
              src="assets/img/Fig4.png"
              onClick={() => routeChange('/plots/WindSpeed')}
            />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Comparison;

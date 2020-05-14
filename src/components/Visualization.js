import React, { useState } from 'react';
import {
  Grid,
  Image,
  Segment,
  Button,
  Divider,
  Header,
  Icon,
} from 'semantic-ui-react';

const Visualization = ({ handlePlotchoice }) => {
  const [atMain, setAtmain] = useState(true);
  const [selected, setSelected] = useState({
    maxtemp: false,
    humidity: false,
    cloudiness: false,
    windspeed: false,
  });

  const selectFigure = (name) => {
    setSelected({
      maxTemp: false,
      humidity: false,
      cloudiness: false,
      windSpeed: false,
    });
    if (name !== '') {
      setSelected({ [name]: true });
    }
  };

  return (
    <Segment color="teal">
      <Header as="h3" color="teal">
        Visualizations
      </Header>
      <Divider />

      <Grid stretched relaxed>
        <Grid.Row>
          <Grid.Column mobile={4} computer={8} stretched>
            <Image
              alt="MaxTemp"
              fluid
              src="assets/img/Fig1.png"
              onClick={() => {
                handlePlotchoice('MaxTemp');
                setAtmain(false);
                selectFigure('maxTemp');
              }}
              disabled={selected['maxTemp']}
            />
          </Grid.Column>

          <Grid.Column mobile={4} computer={8} stretched>
            <Image
              alt="Humidity"
              fluid
              src="assets/img/Fig2.png"
              onClick={() => {
                handlePlotchoice('Humidity');
                setAtmain(false);
                selectFigure('humidity');
              }}
              disabled={selected['humidity']}
            />
          </Grid.Column>

          <Grid.Column mobile={4} computer={8} stretched>
            <Image
              alt="Cloudiness"
              fluid
              src="assets/img/Fig3.png"
              onClick={() => {
                handlePlotchoice('Cloudiness');
                setAtmain(false);
                selectFigure('cloudiness');
              }}
              disabled={selected['cloudiness']}
            />
          </Grid.Column>

          <Grid.Column mobile={4} computer={8} stretched>
            <Image
              alt="WindSpeed"
              fluid
              src="assets/img/Fig4.png"
              onClick={() => {
                handlePlotchoice('WindSpeed');
                setAtmain(false);
                selectFigure('windSpeed');
              }}
              disabled={selected['windSpeed']}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider horizontal>...</Divider>
      <Button
        onClick={() => {
          handlePlotchoice('Intro');
          setAtmain(true);
          selectFigure('');
        }}
        disabled={atMain}
        fluid
      >
        <Icon name="info" />
        Return to Summary
      </Button>
    </Segment>
  );
};

export default Visualization;

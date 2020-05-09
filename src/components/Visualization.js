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
  return (
    <Segment>
      <Header as="h3" color="teal">
        Visualizations
      </Header>
      <Divider />

      <Grid relaxed="tight">
        <Grid.Row columns={4} only="mobile">
          <Grid.Column>
            <Image
              alt="MaxTemp"
              fluid
              src="assets/img/Fig1.png"
              onClick={() => {
                handlePlotchoice('MaxTemp');
                setAtmain(false);
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              alt="Humidity"
              fluid
              src="assets/img/Fig2.png"
              onClick={() => {
                handlePlotchoice('Humidity');
                setAtmain(false);
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              alt="Cloudiness"
              fluid
              src="assets/img/Fig3.png"
              onClick={() => {
                handlePlotchoice('Cloudiness');
                setAtmain(false);
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              alt="WindSpeed"
              fluid
              src="assets/img/Fig4.png"
              onClick={() => {
                handlePlotchoice('WindSpeed');
                setAtmain(false);
              }}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} only="tablet">
          <Grid.Column>
            <Image
              alt="MaxTemp"
              fluid
              src="assets/img/Fig1.png"
              onClick={() => {
                handlePlotchoice('MaxTemp');
                setAtmain(false);
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              alt="Humidity"
              fluid
              src="assets/img/Fig2.png"
              onClick={() => {
                handlePlotchoice('Humidity');
                setAtmain(false);
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              alt="Cloudiness"
              fluid
              src="assets/img/Fig3.png"
              onClick={() => {
                handlePlotchoice('Cloudiness');
                setAtmain(false);
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              alt="WindSpeed"
              fluid
              src="assets/img/Fig4.png"
              onClick={() => {
                handlePlotchoice('WindSpeed');
                setAtmain(false);
              }}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} only="computer">
          <Grid.Column>
            <Image
              alt="MaxTemp"
              fluid
              src="assets/img/Fig1.png"
              onClick={() => {
                handlePlotchoice('MaxTemp');
                setAtmain(false);
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              alt="Humidity"
              fluid
              src="assets/img/Fig2.png"
              onClick={() => {
                handlePlotchoice('Humidity');
                setAtmain(false);
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              alt="Cloudiness"
              fluid
              src="assets/img/Fig3.png"
              onClick={() => {
                handlePlotchoice('Cloudiness');
                setAtmain(false);
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              alt="WindSpeed"
              fluid
              src="assets/img/Fig4.png"
              onClick={() => {
                handlePlotchoice('WindSpeed');
                setAtmain(false);
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider horizontal>...</Divider>
      <Button
        onClick={() => {
          handlePlotchoice('Intro');
          setAtmain(true);
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

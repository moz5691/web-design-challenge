import React from 'react';
import { Image, Header, Divider, Segment } from 'semantic-ui-react';

const Intro = () => {
  return (
    <Segment>
      <Header as="h2" color="teal">
        Summary: Latitude vs. X
      </Header>
      <Divider></Divider>
      <>
        <Image
          floated="left"
          src="assets/img/Fig1.png"
          alt="MaxTemp"
          size="medium"
        />
        <h4>
          The purpose of this project was to analyze how weather changes as you
          get close to the equator. To accomplish this analysis, we first pulled
          the data from the OpenWeatherMap API to assemble a dataset on over 500
          cities.
        </h4>
        <h4>
          After assembling the dataset, we used Matplotlib to plot various
          aspects of the weather vs. latitude, cloudiness, wind speed, and
          humidity. This site provides the source data and visualizations
          created as part of the analysis, as well as explanations and
          descriptions of any trends and correlations witnessed.
        </h4>
      </>
    </Segment>
  );
};

export default Intro;

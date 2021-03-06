import React, { useState } from 'react';
import { Image, Segment, Button, Icon, Header } from 'semantic-ui-react';
import Intro from './Intro';
import info from './Info';

const Summary = ({ plotchoice }) => {
  const [desctoggle, setDisctoggle] = useState(true);

  if (plotchoice === 'Intro') return <Intro />;

  return (
    <Segment color="teal" stacked content>
      <Header
        as="h3"
        color="teal"
        style={{ display: 'inline-block', margin: 10 }}
      >
        {info[plotchoice].title}
      </Header>
      <Button
        size="mini"
        onClick={() => setDisctoggle(!desctoggle)}
        color="teal"
      >
        {desctoggle ? (
          <Button.Content>
            <Icon name="hide" />{' '}
          </Button.Content>
        ) : (
          <Button.Content>
            <Icon name="unhide" />
          </Button.Content>
        )}
      </Button>

      <Image fluid src={info[plotchoice].figure} alt={info[plotchoice].alt} />

      {desctoggle ? (
        <>
          <h4>{info[plotchoice].description.join('\n')}</h4>
        </>
      ) : (
        <></>
      )}
    </Segment>
  );
};

export default Summary;

import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
import { Table, Segment, Loader, Dimmer } from 'semantic-ui-react';

const Data = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setTimeout(() => {
      csv('assets/data/cities.csv').then((data) => {
        setData(data);
      });
    }, 1000);
  }, []);

  if (data === undefined)
    return (
      <div>
        <Dimmer active inverted>
          <Loader content="Loading..." />
        </Dimmer>
      </div>
    );
  return (
    <Segment>
      <h3>Data</h3>
      <p>
        The following table includes all of the data used for plotting durring
        this project.
      </p>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>City_ID</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Cloudiness</Table.HeaderCell>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((d) => (
            <Table.Row key={d.City_ID}>
              <Table.Cell>{d.City_ID}</Table.Cell>
              <Table.Cell>{d.City}</Table.Cell>
              <Table.Cell>{d.Cloudiness}</Table.Cell>
              <Table.Cell>{d.Country}</Table.Cell>
              <Table.Cell>{d.Date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default Data;

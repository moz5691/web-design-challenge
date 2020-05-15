import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
import { Table, Segment, Loader, Dimmer, Divider } from 'semantic-ui-react';

const Data = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setTimeout(() => {
      csv('assets/data/cities.csv').then((data) => {
        setData(data);
      });
    }, 800);
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
      <h2 class="ui header teal">Data</h2>
      <h4>
        The following table includes all of the data used for plotting during
        this project.
      </h4>
      <Divider />
      <Table stripped celled fixed singleline unstackable>
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

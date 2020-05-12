import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Dropdown, Menu, Image } from 'semantic-ui-react';
import Home from './Home';
import Comparison from './Comparison';
import Data from './Data';
import Plots from './Plots';

const Main = () => {
  return (
    <HashRouter>
      <>
        <Menu size="large" stackable color="teal" fluid inverted>
          <Menu.Item name="Latitude" as={NavLink} exact to="/">
            <Image
              wrapped
              alt="logo"
              size="small"
              src="assets/img/lattitude.png"
            ></Image>
          </Menu.Item>
          <Menu.Menu position="right">
            <Dropdown item text="Plots">
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/plots/MaxTemp">
                  Max Temperature
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/plots/Humidity">
                  Humidity
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/plots/Cloudiness">
                  Cloudness
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/plots/WindSpeed">
                  Wind Speed
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item name="comparison" as={NavLink} to="/comparison" />
            <Menu.Item name="data" as={NavLink} to="/data" />
          </Menu.Menu>
        </Menu>

        <div className="content">
          <Route exact path="/">
            <Home plot="Intro" />
          </Route>
          <Route path="/plots/:name">
            <Plots />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
          <Route path="/comparison">
            <Comparison />
          </Route>
        </div>
      </>
    </HashRouter>
  );
};

export default Main;

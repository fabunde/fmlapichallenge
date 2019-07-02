import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./components/Login";
import LatAndLongForm from "./components/Ltlng/LongAndLatForm";
import LatAndLongResult from "./components/Ltlng/LongAndLatResult";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      state: ""
    };
  }
  handleLatLongSubmit = ltlgInfo => {
    axios
      .get(`https://api.weather.gov/points/${ltlgInfo.lat},-${ltlgInfo.long}`)
      .then(result => {
        const {
          city,
          state
        } = result.data.properties.relativeLocation.properties;

        this.setState({
          city,
          state
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleLogin = userInfo => {
    console.log(userInfo);
  };

  render() {
    const { city, state } = this.state;
    return (
      <Router>
        <Container className="App">
          <Row>
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <Route
                exact
                path="/login"
                render={props => (
                  <Login {...props} onUserSubmit={this.handleLogin} />
                )}
              />

              <Route
                exact
                path="/"
                render={props => (
                  <Login {...props} onUserSubmit={this.handleLogin} />
                )}
              />
            </Col>

            <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
              <Route
                exact
                path="/latlng"
                render={props => (
                  <React.Fragment>
                    <LatAndLongForm
                      {...props}
                      onLatLongSubmit={this.handleLatLongSubmit}
                    />{" "}
                    <LatAndLongResult {...props} city={city} state={state} />{" "}
                  </React.Fragment>
                )}
              />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;

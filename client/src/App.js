import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./components/Login";
import LatAndLongForm from "./components/Ltlng/LatAndLongForm";
import LatAndLongResult from "./components/Ltlng/LatAndLongResult";
import Error from "./components/Error";
import isEmpty from "./util/isEmpty";

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
        if (result.data) {
          const {
            city,
            state
          } = result.data.properties.relativeLocation.properties;

          this.setState({
            city,
            state
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleLogin = userInfo => {
    axios
      .post("/api/users/login", userInfo)
      .then(res => {
        const { token } = res.data;
        if (!isEmpty(token)) {
          window.location.href = "/latlng";
        }
      })
      .catch(err => {
        console.log(err);
        window.location.href = "/error";
      });
  };

  render() {
    const { city, state } = this.state;
    return (
      <Router>
        <Container className="App">
          <Row>
            <Col
              className="contentHolder"
              md={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
            >
              <Route
                exact
                path="/"
                render={props => <Login onUserSubmit={this.handleLogin} />}
              />

              <Route exact path="/error" component={Error} />

              <Route
                exact
                path="/latlng"
                render={() => (
                  <>
                    <LatAndLongForm
                      onLatLongSubmit={this.handleLatLongSubmit}
                    />{" "}
                    <LatAndLongResult city={city} state={state} />{" "}
                  </>
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

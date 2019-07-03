import React, { Component } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

import PropTypes from "prop-types";

class LatAndLongForm extends Component {
  constructor() {
    super();

    this.state = {
      long: "",
      lat: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSumbit = e => {
    let { long, lat } = this.state;

    if (long !== "" || lat !== "") {
      let ltlg = {
        lat,
        long
      };

      this.props.onLatLongSubmit(ltlg);
    } else {
      console.log("empty fields");
    }

    e.preventDefault();
  };

  render() {
    let { lat, long } = this.state;
    return (
      <>
        <h1 style={{ paddingBottom: 30 }}>Success</h1>
        <h3>Enter a Latitude and Longitude</h3>
        <Form data-test="ltlg-form">
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  name="lat"
                  value={lat}
                  placeholder="Enter Latitude"
                  data-test="input"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  name="long"
                  value={long}
                  placeholder="Enter Longitude"
                  onChange={this.handleChange}
                  data-test="input"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            variant="primary"
            type="submit"
            onClick={this.handleSumbit}
            data-test="button"
          >
            Get Info
          </Button>
        </Form>
      </>
    );
  }
}

LatAndLongForm.propTypes = {
  onLatLongSubmit: PropTypes.func
};
export default LatAndLongForm;

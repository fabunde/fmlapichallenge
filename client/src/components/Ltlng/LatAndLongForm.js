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
        <h1 className="heading successheading">Success</h1>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  name="lat"
                  value={lat}
                  placeholder="Enter Latitude"
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
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" onClick={this.handleSumbit}>
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

import React from "react";
import { Row, Col } from "react-bootstrap";
export function Help() {
  return (
    <div className="inner-detail p-4">
      <Row>
        <div className="mb-4">
          <h4>
            <span className="text-orange">Vertigo3.org</span> aims to build a
            global community of science-based inquiry, focussed on our coastal
            seas.
          </h4>
        </div>
        <div className="mb-5">
          <h4>
            There are many ways to assist. Register your interest here to:
          </h4>
        </div>
      </Row>

      <Row>
        <Col md={{ offset: 1 }} className="help-checkbox-list">
          <ul>
            <li>
              <label className="customcheck">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
              </label>
              <h4>Publicly access online data</h4>
            </li>
            <li>
              <label className="customcheck">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <h4>
                Assist with labelling for training Machine Learning models
              </h4>
            </li>

            <li>
              <label className="customcheck">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <h4>Assist in reef identifications</h4>
            </li>

            <li>
              <label className="customcheck">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <h4>Explore technical collaborations</h4>
            </li>

            <li>
              <label className="customcheck">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <h4>Help fund this exciting new initiative</h4>
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col md={{ offset: 1 }} className="mt-5">
          <div className="text-orange">
            <h4>
              Vertigo3.org has the power to impact marine science
              one-thousandfold. This requires a dedicated team of professionals
              across a variety of robotics, manufacturing, field support and
              educational outreach, in both planning and operational roles.
            </h4>

            <h4 className="mt-4">
              …a perfect branding opportunity for someone wishing to create long
              term global impact in a fun marine pursuit.
            </h4>
            <h4 className="mt-4">Please reach out if this is you.</h4>
          </div>
        </Col>
      </Row>
    </div>
  );
}

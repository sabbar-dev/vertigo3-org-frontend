import React from "react";
import { Row, Col, Figure } from "react-bootstrap";

export function Approach() {
  return (
    <div className="inner-detail p-4">
      <Row className="m-0">
        <Col md={6} className="p-3 mt-5">
          <h3 className="mt-5">
            <i>
              ‘Broad-acre methods of underwater survey really haven’t changed in
              50 years. Towed and Autonomous Underwater Vehicles are too
              sluggish to operate quickly amongst coral reefs. Why not apply
              ‘true-flight’ principles to build a robotic underwater glider
              agile enough to be used amongst coral reefs. It doesn’t have to be
              fancy… its just got to do what a marine biologist does, but
              faster’.
            </i>
          </h3>
          <h5 className="mt-5">
            Babel-sbf is a small business operating in marine science and
            technology applications, its Founder Brett responsible for several
            innovations including the first GIS-based oil spill response system
            in the Great Barrier Reef, advances in adaptive dredge management,
            the emergence of light-based thresholds as a tool for managing
            seagrass and methods of remediating damaged coral reefs.
          </h5>
        </Col>
        <Col md={6} className="p-3 image-container cover-image">
          <Figure>
            <Figure.Image
              className="w-100 bnr-img"
              src="/images/mason.jpg"
              alt=""
            />
            <Figure.Caption className="text-white">
              <h5 className="mt-2 mb-4">
                Mason, 11, about to launch a{" "}
                <span className="text-orange">Vertigo3</span> prototype in
                Moreton Bay, March 2020.
              </h5>
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row>
        <div className="m-auto p-4">
          <h5 className="mb-3">
            The 2017 call for proposals to help manage crown of thorns starfish
            on the Great Barrier Reef revealed a problem scaling up high quality
            underwater observations. As a marine scientist and pilot of radio
            controlled and full size gliders, it seemed obvious to apply
            aviation design principles for agile flight to a new underwater
            robot. Early design and prototyping work proved that it was
            possible.
          </h5>
          <h5 className="mt-5 mb-3">
            …and so began a collaboration between Babel-sbf and CSIRO to
            reinvent the ‘manta tow’ technique, collect a thousand times more
            data, use smart computing to provide live analysis and
            interpretation, and make it accessible to the world.
          </h5>
          <h4 className="mb-3 text-blue">
            Welcome <span className="text-orange">Vertigo3</span>, the first
            true-flight underwater ‘glider’. Smart enough to bring marine
            science to the kitchen table.
          </h4>
        </div>
      </Row>
      <hr style={{ borderTop: "1px solid rgba(247, 144, 16, 0.29)" }} />
    </div>
  );
}

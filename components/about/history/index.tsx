import React from "react";
import { Row, Col, Figure } from "react-bootstrap";

export function History() {
  return (
    <div className="inner-detail p-4">
      <Row>
        <Col>
          <Figure>
            <Figure.Image
              className="timeline-graphic"
              src="/images/timeline.png"
              alt=""
            />
          </Figure>
        </Col>
      </Row>
    </div>
  );
}

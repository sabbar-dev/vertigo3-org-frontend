import React from "react";
import { Row, Col, Figure } from "react-bootstrap";

export function Overview() {
  return (
    <div className="inner-detail p-4">
      <Row>
        <Col md={4}>
          <h3 className="mt-5 mb-5">
            <i>
              “How can kids <u>not</u> get excited and inspired by underwater
              aeroplanes on the Great Barrier Reef? Or learn great life skills
              from the ‘fail, then try again’ innovation pathway.
            </i>
          </h3>
          <div className="mb-5 mt-5" style={{ marginTop: "100px !important" }}>
            <h1>“Wow!”</h1>
          </div>
          <h3 className="mt-5">
            “Marine Biologist, and MTS grandad, Brett Kettle came to visit us
            today to show us the underwater glider he and his team have built
            and designed for broad-scale coral reef surveys using AI as part of
            a CSIRO research project. It was FASCINATING! “.
          </h3>
        </Col>
        <Col md={8}>
          <Figure>
            <Figure.Image
              className="w-100 bnr-img"
              src="/images/brett_school.jpg"
              alt="brett teaching kids"
            />
          </Figure>
        </Col>
      </Row>
      <Row>
        <h3 className="text-blue mt-5">
          Mother Teresa Catholic Primary School, Ormeau. (
          <a
            href="https://m.facebook.com/permalink.php?story_fbid=3182149608514507&id=195815153814649&comment_id=3182606415135493"
            target="_blank"
          >
            facebook link
          </a>
          )
        </h3>
      </Row>
    </div>
  );
}

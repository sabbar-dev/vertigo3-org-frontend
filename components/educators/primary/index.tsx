import React from "react";
import Link from "next/link";
import { Row, Col, Figure } from "react-bootstrap";

export function Primary() {
  return (
    <div className="inner-detail p-4">
      <Row>
        <Col md={4}>
          <h3 className="mt-5 mb-5">
            <i>
              “Imagine a STEM project where kids get to craft a real-world
              ‘Finding Dory’ by teaching a computer facial recognition and AI”.
            </i>
          </h3>
          <h5 className="mt-5">
            In 2021 <span className="text-orange">Vertigo3.org</span> will
            develop and deliver a National Curriculum-aligned STEM teaching
            module that engages mid-Primary students in an inquiry-based
            analysis of artificial intelligence, machine learning and data
            analysis and visualization, developing and refining the tools to
            then answer basic reef ecology questions about where Dory lives, and
            why she might live there.
          </h5>
          <h5 className="mt-5">
            The ‘Finding Dory’ module anticipates 6 classroom sessions, and
            assumes students has internet access via personal tablets or
            computers.
          </h5>
          <h5 className="mt-5">
            If your school, or your children or grandkids school, would like to
            become involved, please contact Vertigo3.org{" "}
            <Link href="/about/contact">
              <u>
                <a href="/about/contact" style={{ color: "white" }}>
                  here
                </a>
              </u>
            </Link>
            .
          </h5>
        </Col>
        <Col md={8}>
          <Figure>
            <Figure.Image
              className="w-100"
              src="/images/dory-x.webp"
              alt="finding nemo dory"
            />
            <Figure.Caption className="text-white">
              <h5 className="mt-2 mb-4">
                Pixar/Disney’s ‘Finding Dory’ 2016 animated hit, featuring
                Nemo’s forgetful friend and the adventures she had while
                searching for her parents.
              </h5>
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </div>
  );
}

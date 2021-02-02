import React from "react";
import Meta from "@/components/layout/Meta";
import { Row, Col, Figure } from "react-bootstrap";

export default function HomePage(props) {
  return (
    <>
      <Meta
        title="Vertigo3.org - Big data from shallow seas"
        description="Welcome Vertigo3, the first large-scale democratic tool for underwater research."
      />
      <div className="inner-detail p-4">
        <Row className="m-0">
          <Col md={7} className="p-3 image-container cover-image">
            <Figure>
              <Figure.Image
                className="w-100 bnr-img"
                src="/images/josh_1.jpg"
                alt=""
              />
              <Figure.Caption className="text-white">
                <h5 className="mt-2 mb-4">
                  The <span className="text-orange">Vertigo3</span> true-flight
                  underwater vehicle, deployed on the Great Barrier Reef, July
                  2020.
                </h5>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={5} className="p-3 image-container cover-image">
            <Figure>
              <video
                controls
                className="w-100"
                src="https://res.cloudinary.com/dg5bjw4tn/video/upload/v1607886737/Media1-1_zmdtnz.mp4"
              ></video>
            </Figure>
          </Col>
        </Row>
        <Row>
          <div className="m-auto p-4">
            <h5 className="mb-3">
              ‘It’s a complex world with increasing challenges, especially when
              working underwater... Luckily the world is full of inquiring minds
              that can craft the tools we need for the future. Robotics,
              artificial intelligence, algorithms and machine learning …
              Vertigo3 collects a thousand times more underwater data, analyses
              it a thousand times faster, and puts it in the hands of a thousand
              times more inquiring minds’.{" "}
              <div style={{ textAlign: "end" }}>
                Dr Brett Kettle, inventor of Vertigo3 and Founder of
                Vertigo3.org
              </div>
            </h5>
            <h4 className="mb-3 text-blue">
              Welcome <span className="text-orange">Vertigo3</span>, the first
              large-scale democratic tool for underwater research.
            </h4>
            <h4 className="mb-3 text-blue">
              And welcome to Vertigo3.org, the people who are making it happen.
            </h4>
          </div>
        </Row>
        <hr style={{ borderTop: "1px solid rgba(247, 144, 16, 0.29)" }} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      homePage: true,
      activeSection: "",
      customTabs: [
        { name: "About us", slug: "approach", url: "/about/approach" },
        { name: "Educators", slug: "educators", url: "/educators/overview" },
        { name: "Tools", slug: "tools", url: "" },
      ],
    },
  };
}

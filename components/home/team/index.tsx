import React from "react";
import { Row, Col } from "react-bootstrap";

export function Team({ page }) {
  const { cover = {}, sections = [] } = page;
  return (
    <div className="inner-detail p-4">
      {cover.description && <h1 className="mb-4">{cover.description}</h1>}
      <div className="team-wrap">
        {sections.map((s, _id) => (
          <Row key={_id} className="m-0">
            <Col md={3} className="mb-4">
              {s.media ? (
                <img
                  className="img-fluid"
                  src={
                    s.media?.name.includes("http") ? s.media.name : s.media.url
                  }
                />
              ) : (
                <img
                  style={{ maxWidth: "212px", width: "100%" }}
                  className="img-fluid"
                  src={
                    "https://res.cloudinary.com/dg5bjw4tn/image/upload/v1607893143/profile-placeholder_w6nlol.png"
                  }
                />
              )}
            </Col>
            <Col md={9} className="mb-4">
              <div dangerouslySetInnerHTML={{ __html: s.body }} />
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Row, Col } from "react-bootstrap";

export default function CoverMedia({ cover }) {
  let media = [];

  if (Array.isArray(cover?.media)) {
    media = cover?.media;
  } else {
    media = [cover?.media];
  }

  if (!cover) {
    return <></>;
  }
  // { url, caption }
  return (
    <>
      <Row className="m-0">
        {media.map((m, i) => {
          if (m.mime.includes("image")) {
            return (
              <Col
                key={i}
                className="p-3 image-container cover-image"
                style={{ maxWidth: "616px" }}
              >
                <img
                  className="w-100 bnr-img"
                  src={m.name?.includes("http") ? m.name : m.url}
                  alt=""
                />
                {m.caption && <span className="mt-2 mb-4">{m.caption}</span>}
              </Col>
            );
          }

          if (m.mime.includes("video")) {
            return (
              <Col key={i} className="p-3 image-container cover-image">
                <video
                  className="w-100"
                  src={m.name?.includes("http") ? m.name : m.url}
                  controls
                />
                {m.caption && <span className="mt-2 mb-4">{m.caption}</span>}
              </Col>
            );
          }

          return <></>;
        })}
      </Row>
    </>
  );
}

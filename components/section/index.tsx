import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ContentSection({ section }) {
  const { body, media, description } = section;

  if (!section) {
    return <></>;
  }

  return (
    <>
      {media && media?.mime.includes("image") && (
        <Row>
          <div
            className="content-img-block"
            style={{ display: "flex", alignItems: "baseline" }}
          >
            {description && (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            )}
            <div>
              <img
                src={media?.name.includes("http") ? media?.name : media.url}
              />
              {media?.caption && (
                <span className="mt-2 mb-4">{media.caption}</span>
              )}
            </div>
          </div>
        </Row>
      )}

      {media && media?.mime.includes("video") && (
        <Row>
          <div className="content-img-block">
            {description && (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            )}
            <div>
              <video
                src={media?.name.includes("http") ? media?.name : media.url}
                controls
              />
              {media?.caption && (
                <span className="mt-2 mb-4">{media.caption}</span>
              )}
            </div>
          </div>
        </Row>
      )}

      {body && (
        <Row>
          <div className="m-auto" dangerouslySetInnerHTML={{ __html: body }} />
        </Row>
      )}
      <hr style={{ borderTop: "1px solid rgb(247 144 16 / 29%)" }} />
    </>
  );
}

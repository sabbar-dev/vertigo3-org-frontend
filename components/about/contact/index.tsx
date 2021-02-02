import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export function Contact() {
  function submitForm(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    console.log(data.get("email"), data.get("message"));
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.get("email"),
        text: data.get("message"),
      }),
    })
      .then((res) => {
        console.log("Fetch: ", res);
        // res.status === 200
        // ?
        // router.push("/success")
        //   : router.push("/error");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="inner-detail p-4">
      <Row>
        <Col md="8">
          <h4>For all inquiries…</h4>
        </Col>
        <Col md="4">
          <div className="rss-link">
            <h4 className="text-blue">Subscribe to news feed</h4>
            <img src="/images/rss_icon.png"></img>
          </div>
        </Col>
      </Row>

      <Form className="mt-5 pl-5 pr-5 contact-form" onSubmit={submitForm}>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2" className="text-blue">
            <h5>My email address:</h5>
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext name="email" type="email" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2" className="text-blue">
            <h5>Message:</h5>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              as="textarea"
              name="message"
              style={{ height: "320px" }}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Col md="2">
            <h5 className="text-blue">I am not a robot</h5>
          </Col>
          <Col md="8">
            <Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

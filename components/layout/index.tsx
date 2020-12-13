import Meta from "./Meta";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";

export const Layout = ({ children }) => (
  <Row>
    <Meta />
    <main>{children}</main>
  </Row>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

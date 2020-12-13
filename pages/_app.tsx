import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import TabsNav from "@/components/nav";
import { Container, Row, Col } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Container fluid>
        <Row>
          <Col xl={3} lg={4} md={4}>
            <Sidebar {...pageProps} />
          </Col>
          <Col xl={9} lg={8} md={8}>
            <TabsNav {...pageProps} />
            <Component {...pageProps} />
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    </div>
  );
}

export default MyApp;

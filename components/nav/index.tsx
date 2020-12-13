import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Button, Nav } from "react-bootstrap";

export default function TabsNav(props) {
  const router = useRouter();
  return (
    <div className="tabs-col">
      <Nav
        variant="tabs"
        defaultActiveKey={`/home/why`}
        className={`mr-5 pr-5`}
      >
        {props.tabs &&
          props.tabs.length &&
          props.tabs.map((page, _id) => (
            <Nav.Item key={_id}>
              <Link href={page.url}>
                <a
                  className={`nav-link ${
                    router?.query?.slug === page.slug ? "active" : ""
                  }`}
                  aria-selected="true"
                >
                  {page.name}
                </a>
              </Link>
            </Nav.Item>
          ))}

        <Nav.Item className="nav-item ml-auto">
          <Link href="/educators">
            <a className="nav-link">Educators</a>
          </Link>
        </Nav.Item>

        <Nav.Item className="nav-item">
          <Link href="/tools">
            <a className="nav-link">Tools</a>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

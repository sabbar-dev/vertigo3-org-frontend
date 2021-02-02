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
                  className={`nav-link ${!page.url && "disabled-tab"} ${
                    router?.query?.slug === page.slug ? "active" : ""
                  }`}
                  aria-selected="true"
                >
                  {page.name}
                </a>
              </Link>
            </Nav.Item>
          ))}
        {props.customTabs &&
          props.customTabs.map((page, i) => (
            <Nav.Item key={i} className={`nav-item ${i < 1 ? "ml-auto" : ""}`}>
              <Link href={page.url}>
                <a
                  className={`nav-link ${!page.url && "disabled-tab"} ${
                    router?.query?.slug === page.slug ? "active" : ""
                  }`}
                  aria-selected="true"
                >
                  {page.name}
                </a>
              </Link>
            </Nav.Item>
          ))}
      </Nav>
      <Nav.Item className="profile-icon">
        <Nav.Link>
          <img src="/images/user-photo.png"></img>
        </Nav.Link>
      </Nav.Item>
    </div>
  );
}

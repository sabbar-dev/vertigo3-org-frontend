import React from "react";
import Link from "next/link";

export default function Sidebar(props) {
  const { homePage, activeSection } = props;
  return (
    <>
      <div
        className="column-left logo"
        style={{ maxWidth: homePage ? "360px" : "" }}
      >
        <Link href="/">
          <img
            className="img-fluid"
            src="/images/vertigo3-orange-logo.png"
            style={{ cursor: "pointer" }}
          />
        </Link>
        {activeSection && (
          <div className="sidebar-active-section">
            <h2>{activeSection}</h2>
          </div>
        )}
      </div>
    </>
  );
}

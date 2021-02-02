import Skeleton from "react-loading-skeleton";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import {
  Why,
  Approach,
  Team,
  History,
  Help,
  Contact,
} from "@/components/about";

const tabs = [
  {
    name: "Our approach",
    slug: "approach",
    url: "/about/approach",
  },
  {
    name: "Team",
    slug: "team",
    url: "/about/team",
  },
  // {
  //   name: "History",
  //   slug: "history",
  //   url: "/about/history",
  // },
  // {
  //   name: "How to help",
  //   slug: "help",
  //   url: "/about/help",
  // },
  // {
  //   name: "Contact",
  //   slug: "contact",
  //   url: "/about/contact",
  // },
];
export default function AboutContainer(props) {
  const router = useRouter();

  return (
    <Container className="tabs-wrapper" fluid>
      <div className="tab-content">
        {router?.query?.slug === "approach" && <Approach {...props} />}
        {router?.query?.slug === "team" && <Team {...props} />}
        {router?.query?.slug === "history" && <History {...props} />}
        {router?.query?.slug === "help" && <Help {...props} />}
        {router?.query?.slug === "contact" && <Contact {...props} />}
        {!router?.query?.slug && <Approach {...props} />}
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = tabs.map((page) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      activeSection: "About us",
      tabs,
      customTabs: [
        { name: "Educators", slug: "educators", url: "/educators/overview" },
        { name: "Tools", slug: "tools", url: "" },
      ],
    },
  };
}

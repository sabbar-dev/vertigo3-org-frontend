import Skeleton from "react-loading-skeleton";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { Overview, Primary } from "@/components/educators";

const tabs = [
  {
    name: "Overview",
    slug: "overview",
    url: "/educators/overview",
  },
  {
    name: "Primary",
    slug: "primary",
    url: "/educators/primary",
  },
  {
    name: "Secondary",
    slug: "secondary",
    url: "",
  },
  {
    name: "Tertiary",
    slug: "tertiary",
    url: "",
  },
];
export default function EducatorsContainer(props) {
  const router = useRouter();

  return (
    <Container className="tabs-wrapper" fluid>
      <div className="tab-content">
        {router?.query?.slug === "overview" && <Overview {...props} />}
        {router?.query?.slug === "primary" && <Primary {...props} />}
        {!router?.query?.slug && <Overview {...props} />}
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
      activeSection: "Educators",
      tabs,
    },
  };
}

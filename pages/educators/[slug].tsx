import Skeleton from "react-loading-skeleton";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { Overview } from "@/components/educators";

export default function EducatorsContainer(props) {
  const router = useRouter();

  return (
    <Container className="tabs-wrapper">
      <div className="tabs-col">
        <div className="tab-content">
          {router?.query?.slug === "overview" && <Overview {...props} />}
          {!router?.query?.slug && <Overview {...props} />}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.CMS_STRAPI_API_URL}/tabs?category=educators`
  );
  const pages = await res.json();

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const tabs = await fetch(
    `${process.env.CMS_STRAPI_API_URL}/tabs?category=educators`
  ).then((res) => res.json());

  const page = await fetch(
    `${process.env.CMS_STRAPI_API_URL}/${params.slug}`
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return {};
  });

  return {
    props: {
      tabs,
      page,
    },
  };
}

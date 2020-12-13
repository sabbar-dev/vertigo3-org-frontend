import Skeleton from "react-loading-skeleton";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { Why, Approach, Team, History } from "@/components/home";

export default function HomeContainer(props) {
  const router = useRouter();

  return (
    <Container className="tabs-wrapper">
      <div className="tabs-col">
        <div className="tab-content">
          {router?.query?.slug === "why" && <Why {...props} />}
          {router?.query?.slug === "approach" && <Approach {...props} />}
          {router?.query?.slug === "team" && <Team {...props} />}
          {router?.query?.slug === "history" && <History {...props} />}
          {!router?.query?.slug && <Why {...props} />}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.CMS_STRAPI_API_URL}/tabs?category=home`
  );
  const pages = await res.json();

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const tabs = await fetch(
    `${process.env.CMS_STRAPI_API_URL}/tabs?category=home`
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

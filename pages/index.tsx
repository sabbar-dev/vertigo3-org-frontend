import Skeleton from "react-loading-skeleton";

import Nav from "@/components/nav";
import { Container } from "react-bootstrap";
import Entries from "@/components/entries";

import { useEntries } from "@/lib/swr-hooks";
import HomeContainer from "./home/[slug]";

export default function IndexPage(props) {
  return <HomeContainer {...props} />;
}

export async function getStaticProps({ params }) {
  const tabs = await fetch(
    `${process.env.CMS_STRAPI_API_URL}/tabs?category=home`
  ).then((res) => res.json());

  const page = await fetch(
    `${process.env.CMS_STRAPI_API_URL}/why`
  ).then((res) => res.json());

  return { props: { page, tabs } };
}

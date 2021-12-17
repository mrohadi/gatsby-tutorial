import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default function AboutPage({ data }) {
  return (
    <Layout pageTitle="About Me">
      <Link to="/">Back to Home</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby
      </p>
      <p>{data.site.siteMetadata.description}</p>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

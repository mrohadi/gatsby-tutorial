import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this site by following Gatsby tutorial</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/pexels-david-besh-884788.jpg"
      ></StaticImage>
    </Layout>
  );
}

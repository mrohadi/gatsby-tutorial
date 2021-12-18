import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

// export function query() {
//   graphql`
//     query ($id: String) {
//       mdx(id: { eq: $id }) {
//         frontmatter {
//           title
//           date(formatString: "MMMM D, YYYY")
//         }
//         body
//       }
//     }
//   `;
// }

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default function BlogPage({ data }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
}

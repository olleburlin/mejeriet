import React from "react";
import News from "../../components/aktuellt/News";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

export default function AktuelltPage({ data }) {
  const posts = data.allWpPost.nodes;
  return (
    <Layout>
      <News posts={posts} />
    </Layout>
  );
}
export const query = graphql`
  {
    allWpPost(filter: { status: { eq: "publish" } }, limit: 10) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        title
        slug
        status
        content
        excerpt
      }
    }
  }
`;

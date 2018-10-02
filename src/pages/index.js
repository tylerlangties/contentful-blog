import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PostListing from '../components/Posts/PostListing';

import Layout from '../components/layout';

const IndexPage = ({data}) => (
  <Layout>
    
    <h2>{data.site.siteMetadata.title}</h2>
    {data.allContentfulBlogPost.edges.map(({node}) => {
      return <PostListing key={node.id} post={node} />
    })}
  </Layout>
);

export default IndexPage;

export const query = graphql`
query SiteMeta{
  site{
    siteMetadata{
      title
      desc
    }
  }
  allContentfulBlogPost {
    edges {
      node {
        slug
        id
        title
        createdAt(formatString: "MMMM DD, YYYY")
        body {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
} 
`;

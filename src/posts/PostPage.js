import React, { Component } from 'react';
import Layout from '../components/layout';
import PageTransition from 'gatsby-plugin-page-transitions';

export default class PostPage extends Component {

  render() {
      const { data } = this.props;
      if (!data) return null;
      return (
        <Layout>
          <span>{data.contentfulBlogPost.date}</span>
          <h1>{data.contentfulBlogPost.title}</h1>
          <div dangerouslySetInnerHTML = {{
            __html: data.contentfulBlogPost.body.childMarkdownRemark.html
          }}/>
        </Layout>
      );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
      id
    }
  }
`;
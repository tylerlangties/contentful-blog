import React, { Component } from 'react';
import Layout from '../components/layout';
import ReactDOM from 'react-dom';

export default class PostPage extends Component {

   render() {
      const { data } = this.props;
      if (!data) return null;
      return (
         <Layout>
            <span>{data.markdownRemark.frontmatter.date}</span>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML = {{
               __html: data.markdownRemark.html
            }}/>
         </Layout>
      );
   }
}

export const query = graphql`
   query BlogPostQuery($slug: String!) {
      markdownRemark(fields: {
         slug: {
           eq: $slug
         }
       }) {
         html
         frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
         }
       }
   }
`;
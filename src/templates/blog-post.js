import React from 'react';
import Layout from '../components/layout';
// import Img from 'gatsby-image';
import Metatags from '../components/Metatags';
import { graphql } from 'gatsby'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title, description, date } = post.frontmatter;

    return (
        <Layout>
            <Metatags
                title={title}
                description={description}
                pathname={props.location.pathname}
            />
            <div>
                <h1>{title}</h1>
                <span>{date}</span>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}


export default BlogPost


export const query = graphql`

 query PostQuery($path: String!) {
     markdownRemark(fields: { path: { eq: $path } }) {
       html
       frontmatter {
        title
        description
        date(formatString: "MMMM Do YYYY")
       }
   }
}
`
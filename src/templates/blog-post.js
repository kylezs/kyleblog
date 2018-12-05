import React from 'react';
import Layout from '../components/layout';
// import Img from 'gatsby-image';
// import Metatags from '../components/Metatags';
import { graphql } from 'gatsby'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    // const url = props.data.site.siteMetadata.siteUrl
    const { title, description, date } = post.frontmatter;

    // <Metatags
    //     title={title}
    //     description={description}
    //     url={url}
    //     pathname={props.location.pathname}
    // />
    return (
        <Layout>

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

 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
        date(formatString: "MMMM Do YYYY")
       }
   }
}
`
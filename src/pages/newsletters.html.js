import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Les archives de la newsletter" />

      <div className="centered">
        <h1>Newsletters</h1>

        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.fields.slug}>
                #{node.frontmatter.number}, le {node.frontmatter.published_at}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "newsletter" } } }
      sort: { fields: [frontmatter___published_at], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            number
            published_at(formatString: "DD/MM/YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

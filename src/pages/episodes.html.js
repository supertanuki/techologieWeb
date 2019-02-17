import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Les épisodes de Techologie" />

      <div>
        <h1>Épisodes</h1>

        <ul className="episodes">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li className="episode" key={node.id}>
              <div className="image">
                <Link to={node.fields.slug}>
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                </Link>
              </div>
              <div className="description">
                <h2>
                  <Link to={node.fields.slug}>
                    #{node.frontmatter.episode_number} {node.frontmatter.title}{' '}
                  </Link>
                </h2>
                <span className="label">
                  {node.frontmatter.people}
                </span>
                <span className="label">
                  {node.frontmatter.published_at}
                </span>
              </div>
              <div className="clear" />
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
      sort: { fields: [frontmatter___published_at], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            episode_number
            title
            people
            published_at(formatString: "DD/MM/YYYY")
            description
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

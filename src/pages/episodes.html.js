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
            <li key={node.id} className="enlarge-link">
              <div className="image">
                <Img
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <div className="description">
                <p class="episode-label">
                  Épisode {node.frontmatter.episode_number}
                </p>
                <h2>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h2>
                <p>{node.frontmatter.people}</p>
              </div>
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
      filter: { frontmatter: { type: { ne: "newsletter" } } }
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
                fluid(maxWidth: 240) {
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

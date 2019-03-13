import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import logo from '../images/techologie-logo.png'
import SEO from '../components/seo'
import Img from "gatsby-image";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Techologie, le podcast qui tente de lier tech et écologie alors que tout les oppose."/>

      <div className="centered margin-top">
        <img
          src={logo}
          alt="Techologie"
          width="340"
          height="340"
          className="logo"
        />

        <h1>
          Techologie, le podcast qui tente de lier tech et écologie alors que
          tout les oppose.
        </h1>
      </div>

      <div className="centered">
        <p>Écouter et s'abonner :</p>

        <p>
          <a
            href="http://feeds.soundcloud.com/users/soundcloud:users:555069720/sounds.rss"
            className="button"
          >
            RSS
          </a>
          <a href="https://soundcloud.com/techologie" className="button">
            Soundcloud
          </a>
          <a
            href="https://itunes.apple.com/fr/podcast/techologie/id1446844143?mt=2"
            className="button"
          >
            Apple Podcasts
          </a>
        </p>

        <hr />

        <h2>Dernier épisode publié</h2>

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
                    {node.frontmatter.title}{' '}
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
      limit: 1, sort: { fields: [frontmatter___published_at], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
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

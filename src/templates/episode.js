import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  const episode = data.markdownRemark
  const meta = episode.frontmatter
  const title = `#${meta.episode_number} ${meta.title}`
  const slug = episode.fields.slug

  return (
    <Layout>
      <SEO title={title} description={meta.description} />
      <div>
        <div className="centered">
          <Img fixed={meta.image.childImageSharp.fixed} className="logo" />
        </div>

        <h1>{title}</h1>
        <p>Publié le {meta.published_at}</p>

        <div className="block">
          <p className="centered">
            <a href={meta.audio_link} className="button">
              Écouter
            </a>
          </p>
          <p>{meta.description}</p>
          <p>
            En écoutant cet épisode, vous téléchargerez{' '}
            {meta.audio_size_in_megabyte} Mo de données.
          </p>
        </div>

        <div dangerouslySetInnerHTML={{ __html: episode.html }} />

        <p className="centered">
          <a
            href={`https://github.com/supertanuki/techologieWeb/blob/master/src/pages${slug}.md`}
          >
            Proposer une modification de cette page sur Github
          </a>
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        episode_number
        title
        description
        published_at(formatString: "DD/MM/YYYY")
        audio_link
        audio_size_in_megabyte
        image {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`

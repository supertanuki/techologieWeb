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
      <SEO title={`Techologie ${title}`} description={meta.description} />
      <div>
        <h1>{title}</h1>

        <div className="centered margin-top">
          <Img fixed={meta.image.childImageSharp.fixed} className="logo" />
        </div>

        <h2 className="centered">avec {meta.people}</h2>

        <p><span className="label">Publié le {meta.published_at}</span></p>

        <div className="block">
          <p className="centered">
            <a href={meta.audio_link} className="button">
              Écouter
            </a>
          </p>
          <p>{meta.description}</p>
          <p>
            En écoutant cet épisode, vous téléchargerez{' '}
            {meta.audio_size_in_megabyte} Mo de données ce qui émettra {meta.audio_size_in_megabyte} gCO<sub>2</sub>eq.
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
        people
        description
        published_at(formatString: "DD/MM/YYYY")
        audio_link
        audio_size_in_megabyte
        image {
          childImageSharp {
            fixed(width: 160, height: 160) {
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

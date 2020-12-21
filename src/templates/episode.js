import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  const episode = data.markdownRemark
  const meta = episode.frontmatter
  const title = meta.title
  const slug = episode.fields.slug

  return (
    <Layout>
      <SEO title={`Techologie ${title}`} description={meta.description} image={meta.image.childImageSharp.fixed.src} />
      <div>
        <br />
	<p className="published">
		📅 Épisode {meta.episode_number} publié le {meta.published_at}
	</p>

	<h1>{title}</h1>

	<p>
		<Img fixed={meta.image.childImageSharp.fixed} alt="" />
	</p>
	<p className="label">
		<span>{meta.people}</span>
	</p>

	<p>{meta.description}</p>

	<p className="listen">🎧 <a href={meta.audio_link} title={`Écouter l'épisode ${title} sur Soundcloud`}>Écouter</a></p>

        <div dangerouslySetInnerHTML={{ __html: episode.html }} />

        <p>
          En écoutant cet épisode, vous téléchargerez{' '}
          {meta.audio_size_in_megabyte} Mo de données.
        </p>

        <p>
          <a
            href={`https://github.com/supertanuki/techologieWeb/blob/master/src/pages${slug}.md`}
          >
            Proposer une modification de cette page
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
            fixed(width: 240, height: 240) {
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

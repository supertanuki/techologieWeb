import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  const episode = data.markdownRemark
  const meta = episode.frontmatter
  const title = meta.title
  const slug = episode.fields.slug

  return (
    <Layout>
      <SEO
        title={`Techologie Newsletter #${meta.number}`}
        description={meta.description}
        image={meta.image.childImageSharp.fixed.src}
      />
      <div className="centered">
        <h1>
          Newsletter #{meta.number} envoyée le {meta.published_at}
        </h1>

        <div dangerouslySetInnerHTML={{ __html: episode.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        number
        published_at(formatString: "DD/MM/YYYY")
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

import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404, page non trouvée !" />
    <h1>404, page non trouvée !</h1>

    <div className="centered">
      <p>Essayez par ici par exemple :</p>
      <Link to={`/episodes.html`} className="button">
        Liste des épisodes
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage

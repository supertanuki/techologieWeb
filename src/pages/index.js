import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import logo from '../images/techologie-logo.jpg'
import SEO from '../components/seo'

export default () => {
  return (
    <Layout>
      <SEO title="Techologie, le podcast qui tente de lier tech et écologie alors que tout les oppose." />

      <div className="centered">
        <img
          src={logo}
          alt="Techologie"
          width="200"
          height="200"
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

        <Link to={`/episodes.html`} className="button">
          Liste des épisodes
        </Link>
      </div>
    </Layout>
  )
}

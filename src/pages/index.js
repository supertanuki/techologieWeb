import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import logo from '../images/techologie-logo.png'
import SEO from '../components/seo'

export default ({data}) => {
  return (
    <Layout>
      <SEO title="Techologie, le podcast qui tente de lier tech et écologie alors que tout les oppose."/>

      <div className="centered margin-top">
        <Link to={`/episodes.html`}><img
          src={logo}
          alt="Techologie"
          width="340"
          height="340"
          className="logo"
        /></Link>

        <h1>
          Techologie, le podcast qui tente de lier tech et écologie alors que
          tout les oppose.
        </h1>
      </div>

      <p className="centered">
        <Link to={`/episodes.html`} className="button">Les épisodes</Link>
      </p>

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
            Apple
          </a>
          <a
            href="https://open.spotify.com/show/4UWIXYVgM4SHzDLHarxFqs?si=5biELlz2SJeV1-BAuP4csQ"
            className="button"
          >
            Spotify
          </a>
        </p>
      </div>
    </Layout>
  )
}

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import logo from '../images/techologie-logo.png'
import SEO from '../components/seo'

export default () => {
  return (
    <Layout>
      <SEO title="Techologie, le podcast qui tente de lier tech et écologie alors que tout les oppose." />

      <div className="centered">
        <h1>
          Techologie, le podcast qui tente de lier tech et écologie alors que
          tout les oppose.
        </h1>

        <Link to={`/episodes.html`}>
          <img src={logo} alt="Techologie" className="logo" />
        </Link>

        <p className="listen">
          <Link to={`/episodes.html`} className="button">
            Liste des épisodes
          </Link>
        </p>

        <p>Écouter et s'abonner :</p>

        <ul>
          <li>
            <a href="http://feeds.soundcloud.com/users/soundcloud:users:555069720/sounds.rss">
              RSS
            </a>
          </li>

          <li>
            <a href="https://www.imagotv.fr/podcasts/techologie">Imago</a>
          </li>
          <li>
            <a href="https://itunes.apple.com/fr/podcast/techologie/id1446844143?mt=2">
              Apple
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/techologie">Soundcloud</a>
          </li>
          <li>
            <a href="https://open.spotify.com/show/4UWIXYVgM4SHzDLHarxFqs?si=5biELlz2SJeV1-BAuP4csQ">
              Spotify
            </a>
          </li>
        </ul>

        <p>
          <Link to={`/communaute.html`} className="button">
            S'inscrire à la newsletter
          </Link>
        </p>
      </div>
    </Layout>
  )
}

import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import logo from '../images/techologie-logo.png'
import SEO from '../components/seo'

export default () => {
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

            <div className="centered" style={{'marginTop': '40px'}}>
                <p>Écouter et s'abonner :</p>

                <ul style={{'listStyle': 'none', 'padding': 0}}>
                    <li><a
                        href="http://feeds.soundcloud.com/users/soundcloud:users:555069720/sounds.rss"
                    >
                        RSS
                    </a></li>

                    <li><a
                        href="https://itunes.apple.com/fr/podcast/techologie/id1446844143?mt=2"
                    >
                        Apple
                    </a></li>
                    <li><a href="https://soundcloud.com/techologie">
                        Soundcloud
                    </a></li>
                    <li><a
                        href="https://open.spotify.com/show/4UWIXYVgM4SHzDLHarxFqs?si=5biELlz2SJeV1-BAuP4csQ"
                    >
                        Spotify
                    </a></li>
                </ul>
            </div>
        </Layout>
    )
}

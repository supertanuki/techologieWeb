import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Communauté et newsletter" />

    <div class="centered">
      <h1>Communauté et newsletter</h1>

      <h2>Techologie c'est aussi une communauté</h2>

      <p>
        Rejoignez-nous sur
        <a href="https://framateam.org/techologie/">
          framateam
        </a>
      </p>

      <h2>S'inscrire à la newsletter</h2>

      <p>
        Inscrivez-vous à la newsletter de Techologie pour recevoir toutes les 2
        semaines un contenu original, une veille collaborative sur le thème
        technologies et écologie, les alertes greenwashing et le tout sur un ton
        léger car oui, même si le sujet est grave, on essaye de ne pas se
        prendre au sérieux.
      </p>

      <p>
        <Link to={`/newsletters.html`}>Lire en ligne la newsletter</Link>
      </p>

      <p>Pour information, l'outil tiers utilisé est Mailjet.</p>

      <iframe
        title="Inscription à la newsletter"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://app.mailjet.com/widget/iframe/6Adg/I8g"
        style={{ height: '300px' }}
        width="100%"
        frameborder="0"
      />
    </div>
  </Layout>
)
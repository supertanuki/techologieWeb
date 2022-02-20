import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Confirmation d'inscription à la newsletter" />

    <div class="centered">
      <h1>C'est tout bon, vous êtes inscrit·e !</h1>

      <p>
        Vous allez avoir le plaisir, nous espérons, de recevoir toutes les 2
        semaines un contenu original, une veille collaborative sur le thème
        technologies et écologie mais aussi des alertes au greenwashing !
      </p>

      <p>Vous pourrez vous désinscrire à tout moment.</p>

      <p>
        En attendant, et si ce n'est pas encore fait, rejoignez la
        <a href="https://framateam.org/techologie/">
          communauté Techologie sur framateam
        </a>
        .
      </p>
    </div>
  </Layout>
)

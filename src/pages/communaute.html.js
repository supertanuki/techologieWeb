import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Communauté et newsletter" />

    <h1>Communauté et newsletter</h1>
  
    <p>
      Rejoignez-nous sur un énième <a href="https://join.slack.com/t/techologie/shared_invite/enQtNTMwODc1NTYxNDkxLTMzZWI3NTIwNWUyMzIwMGIyMzY2YmYyNDFiZWMyOWJiMTJjOWRkODg2MWM4Y2M1OWE4Y2Y2MmJiNjQ5NTcwZmM">espace slack</a>
      mais nous vous faisons la promesse que celui-ci est plus sympa que les autres ;)
    </p>

    <p>
      Inscrivez-vous à la newsletter de Techologie pour recevoir toutes les 2 semaines un contenu original,
      une veille collaborative sur le thème technologies et écologie,
      les alertes greenwashing et le tout sur un ton léger car oui, même si le sujet est grave, on essaye de ne pas se prendre au sérieux.
    </p>

    <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/6Adg/I8g" style={{height: '300px'}} width="100%" frameborder="0"></iframe>
  </Layout>
)

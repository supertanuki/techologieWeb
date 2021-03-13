import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Confirmation d'inscription à la newsletter" />

    <h1>C'est tout bon, vous êtes inscrit·e !</h1>

    <p>
      Vous allez avoir le plaisir, nous espérons, de recevoir toutes les 2 semaines un contenu original, une veille collaborative sur le thème technologies et écologie, des alertes greenwashing et le tout sur un ton léger car oui, même si le sujet est grave, on essaye de ne pas se prendre au sérieux.
    </p>
  
    <p>Vous pourrez vous désinscrire à tout moment.</p>
  
    <p>
      En attendant, et si ce n'est pas encore fait, rejoignez-nous sur notre <a href="https://join.slack.com/t/techologie/shared_invite/enQtNTMwODc1NTYxNDkxLTMzZWI3NTIwNWUyMzIwMGIyMzY2YmYyNDFiZWMyOWJiMTJjOWRkODg2MWM4Y2M1OWE4Y2Y2MmJiNjQ5NTcwZmM">communauté slack</a>.
    </p>
  </Layout>
)

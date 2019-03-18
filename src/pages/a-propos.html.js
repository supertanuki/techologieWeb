import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="À propos de Techologie" />

    <h1>À propos de Techologie</h1>

    <p>Bonjour,</p>

    <p>
      Je suis <a href="https://twitter.com/richardhanna">Richard Hanna</a>,
      développeur passionné depuis 1996. Je suis né en Guadeloupe, une île
      impactée directement par les changements climatiques (montée du niveau de
      la mer, ouragans) et les pollutions, le{' '}
      <a href="https://fr.wikipedia.org/wiki/Chlord%C3%A9cone_dans_les_Antilles_fran%C3%A7aises">
        chlordécone
      </a>{' '}
      notamment.
    </p>

    <p>
      J'ai découvert que très récemment les{' '}
      <a href="https://fr.wikipedia.org/wiki/Th%C3%A9ories_sur_les_risques_d%27effondrement_de_la_civilisation_industrielle">
        théories sur les risques d'effondrement de la civilisation industrielle
      </a>
      . L'économie du numérique a un impact sur l'environnement et donc prend
      part dans cet effondrement. En France par exemple, le numérique est
      responsable de{' '}
      <a href="https://www.ademe.fr/expertises/batiment/passer-a-laction/elements-dequipement/technologies-linformation-communication-tic">
        13,5 % de la consommation d’électricité
      </a>
      . Au niveau mondial il représente{' '}
      <a href="https://theshiftproject.org/article/pour-une-sobriete-numerique-rapport-shift/">
        3,7 % des émissions de gaz à effet de serre
      </a>
      .
    </p>

    <p>
      Comment nous, professionnels dans la tech ou dans l'économie du numérique,
      développeurs ou développeuses, designers, startups, etc, pouvons-nous agir
      pour limiter notre consommation d'énergie et l'impact sur l'environnement
      ? J'ai lancé ce podcast pour faire intervenir des personnes qui en
      parlent. L'objectif très clair est de faire réfléchir, vous faire
      réfléchir, sur les choses que nous concevons.
    </p>

    <p>
      Quel monde allons-nous laisser à nos enfants (j'en ai deux) ? Et la
      réciproque est vraie. Quels enfants allons-nous laisser au monde ?
    </p>

    <div className="block">
      <p>Comment suivre et donner un coup de pouce à ce podcast ?</p>
      <ul>
        <li>
          Suivre le podcast sur{' '}
          <a href="https://twitter.com/techologieAudio">Twitter</a> ou sur{' '}
          <a href="https://www.facebook.com/techologieAudio">Facebook</a>.
        </li>
        <li>S'abonner et noter le podcast sur votre plateforme préférée.</li>
        <li>Partager aux amis, collègues, voisins...</li>
      </ul>
    </div>

    <p>
      Pour me contacter, le compte Twitter du podcast :{' '}
      <a href="https://twitter.com/techologieAudio">@TechologieAudio</a>.
    </p>
    <p>
      Le code source de ce site est disponible sur{' '}
      <a href="https://github.com/supertanuki/techologieWeb">Github</a>.
    </p>
    <p>
      Les épisodes du podcast sont publiés sous{' '}
      <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/fr/">
        licence Creative Commons CC BY-NC-SA 3.0
      </a>
      .
    </p>
    <p>
      Le logo de Techologie a été créé par <a href="https://www.behance.net/matharet">Stéphanie Matharet</a>.
    </p>
  </Layout>
)

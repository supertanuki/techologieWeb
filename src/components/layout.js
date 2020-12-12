import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => {
  return (
    <div>
      <header>
        <label aria-hidden="true" class="minimal-menu-button" for="mobile-nav">Menu</label>
        <input aria-hidden="true" class="minimal-menu-button" type="checkbox" id="mobile-nav" name="mobile-nav">

        </input>
        <nav class="minimal-menu clr-black pos-fixed">
        <ul>
          <li><Link to={`/`}>Techologie</Link></li>
          <li><Link to={`/episodes.html`}>Épisodes</Link></li>
          <li><Link to={`/a-propos.html`}>À propos</Link></li>
        </ul>
      </nav>
      </header>

			<article>
        {children}

        <footer>
          <p>Podcast de la sélection <a href="https://www.imagotv.fr/">IMAGO</a></p>
          <p>Publié sous licence <a href="#">CC BY-NC-SA 3.0 FR</a></p>
          <p>Commenter sur <a href="https://twitter.com/techologieAudio">Twitter</a>,{' '}
          <a href="https://www.imagotv.fr/podcasts/techologie">Imago</a>,{' '}
          ou <a href="https://join.slack.com/t/techologie/shared_invite/enQtNTMwODc1NTYxNDkxLTMzZWI3NTIwNWUyMzIwMGIyMzY2YmYyNDFiZWMyOWJiMTJjOWRkODg2MWM4Y2M1OWE4Y2Y2MmJiNjQ5NTcwZmM">Slack</a>
          </p>
        </footer>
      </article>
    </div>
  )
}

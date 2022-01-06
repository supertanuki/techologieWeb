import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => {
  return (
    <div>
      <header>
        <label aria-hidden="true" class="minimal-menu-button" for="mobile-nav">
          Menu
        </label>
        <input
          aria-hidden="true"
          class="minimal-menu-button"
          type="checkbox"
          id="mobile-nav"
          name="mobile-nav"
        />
        <nav class="minimal-menu clr-black pos-fixed">
          <ul>
            <li>
              <Link to={`/`}>Techologie</Link>
            </li>
            <li>
              <Link to={`/episodes.html`}>Épisodes</Link>
            </li>
            <li>
              <Link to={`/communaute.html`}>Garder le lien</Link>
            </li>
            <li>
              <Link to={`/a-propos.html`}>À propos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <article>
        {children}

        <footer>
          <p>
            Podcast de la sélection <a href="https://www.imagotv.fr/">IMAGO</a>,
            publié sous licence{' '}
            <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/fr/">
              Creative Commons
            </a>
          </p>
          <p>
            <Link to={`/communaute.html`}>S'inscrire à la newsletter</Link> |{' '}
            Commenter sur{' '}
            <a href="https://twitter.com/techologieAudio">Twitter</a>,{' '}
            <a href="https://www.imagotv.fr/podcasts/techologie">Imago</a>, ou{' '}
            <a href="https://framateam.org/techologie/">
              Framateam
            </a>
          </p>
        </footer>
      </article>
    </div>
  )
}

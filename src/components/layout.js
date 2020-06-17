import React from 'react'
import { Link } from 'gatsby'
import ToggleMode from './toggleMode'

export default ({ children }) => {
  return (
    <div className="frame">
      <header>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>🎙 Techologie</Link>
            </li>
            <li>
              <Link to={`/episodes.html`}>Épisodes</Link>
            </li>
            <li>
              <Link to={`/a-propos.html`}>À propos</Link>
            </li>
            <li className="small-screen-hidden">
              <Link to={`/ailleurs.html`}>Ailleurs</Link>
            </li>
          </ul>
          <ToggleMode />
        </nav>
        <div className="clear" />
      </header>

      <div className="content">
        {children}
      </div>

      <footer>
        <hr />
        <p>
          Podcast de la sélection <a href="https://www.imagotv.fr/">IMAGO</a>
        </p>
        <p>
          Nous suivre sur{' '}
          <a href="https://twitter.com/techologieAudio">Twitter</a> |{' '}
          <a href="https://www.facebook.com/techologieAudio">Facebook</a> |{' '}
          <a href="https://join.slack.com/t/techologie/shared_invite/enQtNTMwODc1NTYxNDkxLTMzZWI3NTIwNWUyMzIwMGIyMzY2YmYyNDFiZWMyOWJiMTJjOWRkODg2MWM4Y2M1OWE4Y2Y2MmJiNjQ5NTcwZmM">
            Slack
          </a>
        </p>
      </footer>
    </div>
  )
}

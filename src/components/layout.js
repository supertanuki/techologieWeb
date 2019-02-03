import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/techologie-logo.jpg'
import ToggleMode from './toggleMode'

export default ({ children }) => {
  return (
    <div className="frame">
      <header>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>
                <img
                  src={logo}
                  alt="Techologie"
                  width="50"
                  height="50"
                  className="logo"
                />
                <span className="small-screen-hidden"> Accueil</span>
              </Link>
            </li>
            <li>
              <Link to={`/episodes.html`}>Épisodes</Link>
            </li>
            <li>
              <Link to={`/a-propos.html`}>À propos</Link>
            </li>
            <li>
              <Link to={`/ailleurs.html`}>Ailleurs</Link>
            </li>
          </ul>
          <ToggleMode />
        </nav>
        <div className="clear" />
      </header>

      {children}

      <footer>
        <hr />
        <p>
          Suivre le podcast sur{' '}
          <a href="https://twitter.com/techologieAudio">Twitter</a> |{' '}
          <a href="https://www.facebook.com/techologieAudio">Facebook</a> |{' '}
          <a href="https://join.slack.com/t/techologie/shared_invite/enQtNTMwODc1NTYxNDkxLWExNjQyNDM0MTA2MzFhMDc1NjllMjM5MWE1NzRlMmNlZGNjZjEyNDFlYjljOTM3NTRhNWE2ZjQ0MWYzOTE3YjM">
            Slack
          </a>
        </p>
      </footer>
    </div>
  )
}

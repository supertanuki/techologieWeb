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

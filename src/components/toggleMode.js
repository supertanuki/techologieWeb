import React from 'react'

class ToggleMode extends React.Component {
  getBody() {
    return document.querySelector('body')
  }

  toggleMode() {
    const body = this.getBody()
    this.setMode(body.className === 'dark' ? 'light' : 'dark')
  }

  setMode(mode) {
    if (!mode) return
    const body = this.getBody()
    body.className = mode
    localStorage.setItem('mode', mode)
  }

  componentDidMount() {
    this.setMode(localStorage.getItem('mode'))
  }

  render() {
    return (
      <button
        onClick={() => this.toggleMode()}
        className="toggle-mode-button float-right"
      >
        <span role="img" aria-label="Changer contraste">
          🌓
        </span>
        <span className="small-screen-hidden"> Changer contraste</span>
      </button>
    )
  }
}

export default ToggleMode

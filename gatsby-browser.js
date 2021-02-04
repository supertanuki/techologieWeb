/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import "./src/styles/global.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Le site a été mis à jour. ` +
      `Recharger pour afficher les mises à jour ?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

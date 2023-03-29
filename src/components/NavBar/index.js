// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, result} = props
  return (
    <div className="navbar-container">
      <div className="navbar-title-icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navbar-image"
        />
        <h1 className="navbar-header">Emojis Game</h1>
      </div>
      {!result && (
        <div className="navbar-score-container">
          <p className="navbar-score">Score: {score}</p>
          <p className="navbar-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar

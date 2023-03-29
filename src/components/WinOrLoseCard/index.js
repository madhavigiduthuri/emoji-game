// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, handlePlayAgain} = props
  return (
    <div className="winorlose">
      <div className="winorlosecard-app">
        <div className="winorlosecard-left">
          <h1 className="winorlose-title">
            You {score !== 12 ? 'lose' : 'win'}
          </h1>
          <div>
            <p className="winorlose-para">Score</p>
            <p className="number-color"> {score}/12</p>
          </div>
          <button
            type="button"
            className="btn"
            onClick={() => handlePlayAgain()}
          >
            Play Again
          </button>
        </div>
        <div className="winorlosecard-right">
          <img
            src={
              score !== 12
                ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            }
            alt={score !== 12 ? 'lose' : 'won'}
            className="image"
          />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard

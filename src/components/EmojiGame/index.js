import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here
class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    result: false,
    clickedEmojiIdsList: [],
  }

  handleClickEmoji = id => {
    const {clickedEmojiIdsList} = this.state
    // console.log(id)
    // idslist lo unda leda ani vethikuthunna... => true/ false
    if (clickedEmojiIdsList.includes(id)) {
      // true => state => result => true
      this.setState(prevState => ({
        ...prevState,
        result: true,
      }))
    } else {
      // false => idsList lo ledu ani ardam
      // idsList lo unnavi anni alane unchi.. ee kotha id ni kooda andulo pettali
      // score entha aithe undo aa score ki + 1 cheyali
      // score === 11 => true / false => true => result ni true cheyali... , false => result false kinde unchali
      this.setState(prevState => ({
        ...prevState,
        clickedEmojiIdsList: [...prevState.clickedEmojiIdsList, id],
        score: prevState.score + 1,
        result: prevState.score === 11,
      }))
    }
  }

  handlePlayAgain = () => {
    // malli emojis game ravali => result false cheyali
    // score 0 aipothondi
    // topScore => score > topScore ? topscore = score : topScore = topscore
    // clickedemojiIds list annadi malla fresh ga empty ga undali

    this.setState(prevState => ({
      score: 0,
      topScore:
        prevState.score > prevState.topScore
          ? prevState.score
          : prevState.topScore,
      result: false,
      clickedEmojiIdsList: [],
    }))
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, result} = this.state
    // const {emojisList} = this.props
    const shuffledList = this.shuffledEmojisList()

    return (
      <div className="emojigame-app-container">
        <div className="navbar-app-container">
          <NavBar score={score} topScore={topScore} result={result} />
        </div>
        {result ? (
          <WinOrLoseCard
            score={score}
            handlePlayAgain={() => this.handlePlayAgain()}
          />
        ) : (
          <div className="emojicard-app-container">
            {shuffledList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emoji={eachEmoji}
                handleClick={x => this.handleClickEmoji(x)}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
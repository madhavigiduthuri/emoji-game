// Write your code here
import './index.css'

const EmojiCard = props => {
  const {emoji, handleClick} = props
  const {emojiUrl, emojiName, id} = emoji

  return (
    <button
      type="button"
      className="emojicard-app"
      onClick={() => handleClick(id)}
    >
      <img src={emojiUrl} alt={emojiName} className="emoji-image" />
    </button>
  )
}

export default EmojiCard

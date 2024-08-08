// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedBackSelected: false,
  }

  onClickEmoji = () => this.setState({isFeedBackSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="background">
        <div className="card-container">
          <h1 className="heading">
            How Satisfied are you with our
            <br />
            customer support performance
          </h1>
          <ul className="emojis">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  type="button"
                  className="btn"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-size"
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji-love" />
        <h1 className="thank-title">Thank You!</h1>
        <p className="para">
          We will use your feedback to improve our customer support service
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBackSelected} = this.state

    return (
      <div className="background">
        <div className="FeedBack-card">
          {isFeedBackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback

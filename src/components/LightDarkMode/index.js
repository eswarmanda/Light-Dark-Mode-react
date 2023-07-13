import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isTrue: false}

  isClicked = () => {
    const {isTrue} = this.state
    this.setState(prevState => {
      console.log(`${prevState.isTrue}`)
      if (isTrue === false) {
        return {isTrue: true}
      }
      return {isTrue: false}
    })
  }

  render() {
    const {isTrue} = this.state
    const modeClassName = isTrue ? 'light-mode' : 'dark-mode'
    return (
      <div className="container">
        <div className={`${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="btn" type="submit" onClick={this.isClicked}>
            {isTrue ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

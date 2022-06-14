import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onClickApplyBrakeButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }
  onClickAccelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedo-meter-bg-container">
        <div className="speedo-meter-container">
          <h1 className="speedo-meter-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png"
            className="speedo-meter-image"
            alt="speedometer"
          />
          <h1 className="speed-text"> Speed is {speed}mph</h1>
          <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              type="button"
              className="accelerate-button button"
              onClick={this.onClickAccelerateButton}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="apply-brake-button button"
              onClick={this.onClickApplyBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer

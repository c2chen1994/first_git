import {Component, PropTypes} from 'react'
import '../stylesheets/ui.scss'
import MdTerrain from 'react-icons/lib/md/terrain'
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow'
import FaCalendar from 'react-icons/lib/fa/calendar'

export class SkiDayCount extends Component {
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <FaCalendar />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
            <TiWeatherSnow />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
            <MdTerrain />
          <span>days</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
}

SkiDayCount.defaultProps = {
  total: 50,
  powder: 15,
  backcountry: 15,
  goal: 75
}

SkiDayCount.propTypes = {
  total: PropTypes.number.isRequired,
  powder: PropTypes.number,
  backcountry: PropTypes.number
}

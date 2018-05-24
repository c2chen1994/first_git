import {PropTypes} from 'react'
import '../stylesheets/ui.scss'
import MdTerrain from 'react-icons/lib/md/terrain'
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow'
import FaCalendar from 'react-icons/lib/fa/calendar'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}
const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const SkiDayCount = (props) => (
  <div className="ski-day-count">
    <div className="total-days">
      <span>{props.total}</span>
        <FaCalendar />
      <span>days</span>
    </div>
    <div className="powder-days">
      <span>{props.powder}</span>
        <TiWeatherSnow />
      <span>days</span>
    </div>
    <div className="backcountry-days">
      <span>{props.backcountry}</span>
        <MdTerrain />
      <span>days</span>
    </div>
    <div>
      <span>
        {calcGoalProgress(
          props.total,
          props.goal
        )}
      </span>
    </div>
  </div>
)

SkiDayCount.defaultProps = {
  total: 50,
  powder: 15,
  backcountry: 15,
  goal: 75
}

SkiDayCount.propTypes = {
  total: PropTypes.number.isRequired,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number
}

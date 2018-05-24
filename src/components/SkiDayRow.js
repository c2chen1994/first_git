import {PropTypes} from 'react'
import MdTerrain from 'react-icons/lib/md/terrain'
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow'
import FaCalendar from 'react-icons/lib/fa/calendar'

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
  <tr>
    <td>
      {date}
    </td>
    <td>
      {resort}
    </td>
    <td>
      {(powder) ? <TiWeatherSnow /> : null}
    </td>
    <td>
      {(backcountry) ? <MdTerrain /> : null}
    </td>
  </tr>
)

SkiDayRow.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool,
  backcountry: PropTypes.bool
}

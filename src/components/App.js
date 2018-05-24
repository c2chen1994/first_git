import {createClass, Component} from 'react'
import {SkiDayList} from './SkiDayList'
import {SkiDayCount} from './SkiDayCount'
import {AddDayForm} from './AddDayForm'
import {Menu} from './Menu'

export class App extends Component {
  //ES6
  constructor(props) {
    super(props)
    this.state = {
      allSkiDays: [
        {
          resort: "Mt. Tallac",
          date: "2016-01-02",
          powder: false,
          backcountry: true
        }
      ]
    }
    this.addDay = this.addDay.bind(this)
  }
  //createClass
  /*
  getInitialState() {
    return {
      allSkiDays: [

        {
          resort: "Squaw Valley",
          date: new Date("1/2/2016"),
          powder: true,
          backcountry: false
        },
        {
          resort: "Kirkwood",
          date: new Date("3/28/2016"),
          powder: false,
          backcountry: false
        },

        {
          resort: "Mt. Tallac",
          date: "2016-01-02",
          powder: false,
          backcountry: true
        }
      ]
    }
  },
  */
  addDay(newDay) {
    this.setState({
      allSkiDays: [
        ...this.state.allSkiDays,
        newDay
      ]
    })
  }
  countDays(filter) {
    const {allSkiDays} = this.state
    return allSkiDays.filter(
      (day) => (filter) ? day[filter] : day
    ).length
  }
  render() {
    return (
      <div className="app">
      <Menu />
        {(this.props.location.pathname === "/") ?
          <SkiDayCount total={this.countDays()}
                     powder={this.countDays("powder")}
                     backcountry={this.countDays("backcountry")}
          /> :
          (this.props.location.pathname === "/add-day") ?
          <AddDayForm onNewDay={this.addDay}/> :
          <SkiDayList days={this.state.allSkiDays}
          filter={this.props.params.filter}
          />
        }
      </div>
    )
  }
}

import React from 'react'
import {render} from 'react-dom'
//import {hello, goodbye} from './lib'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import {SkiDayList} from './components/SkiDayList'
import {SkiDayCount} from './components/SkiDayCount'
import {App} from './components/App'
import {Whoops404} from './components/Whoops404'
import Member from './components/Member'
import MemberList from './components/MemberList'
import {Router, Route, hashHistory} from 'react-router'

window.React = React

//const {createElement} = React
//const{render} = ReactDOM
/*
const style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
}
*/
/*
const title = createElement(
  'h1',
  {id: 'title', className: 'header', style: style},
  'Hello World'
)
*/

/*
render(
  //<h1 id='title'
    //className='header'
    //style={{backgroundColor: 'orange',
    //color: 'white',
    //fontFamily: 'verdana'}}>
  //Hello World!!!!!!
  //</h1>,

  //<div>
    //{hello}
    //{goodbye}
  //</div>,

  <SkiDayCount //total="ads"
               //powder={20}
               //backcountry={10}
               //goal={100}
  />,
  document.querySelector("#react-container")
)
*/

/*
render(
  <SkiDayList //days={[]}
              //days="lots of days"

              days={
                 [
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
                     date: new Date("4/2/2016"),
                     powder: false,
                     backcountry: true
                   }
                 ]
               }

  />,
  document.querySelector("#react-container")
  //$("#react-container")
)
*/


render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="list-days" component={App}>
      <Route path=":filter" component={App} />
    </Route>
    <Route path="add-day" component={App} />
    <Route path="*" component={Whoops404} />
  </Router>,
  //<App />,
  document.querySelector("#react-container")
)

/*
render(

  <Member admin={true}
          name="Edna Welch"
          email="edna.welch88@example.com"
          thumbnail="https://randomuser.me/api/portraits/women/90.jpg"
          makeAdmin={(email) => console.log(email)}
  />,


  <MemberList />,
  document.querySelector("#react-container")
)
*/

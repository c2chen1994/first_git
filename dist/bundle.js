'use strict';

//const {createElement} = React
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
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

render(React.createElement(
  'h1',
  { id: 'title',
    className: 'header',
    style: { backgroundColor: 'orange',
      color: 'white',
      fontFamily: 'verdana' } },
  'Hello World'
), document.querySelector("#react-container")
//$("#react-container")
);

import { render } from 'react-dom'
import  React  from 'react'

window.React = React

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	HEY WORLD!!
	</h1>,
	document.getElementById('react-container')
)

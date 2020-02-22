import React, { useEffect } from 'react'
import UserList from './components/UserList.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Landing from './components/Landing.jsx'

import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
	// useEffect(() => {
	// 	fetch('http://localhost:4000')
	// 		.then(response => response.json())
	// 		.then(response => console.log(response))
	// }, [])

	return (
		<Router>
			<Switch>
				<Route path={'/'} exact component={Landing} />
				<Route path={'/users'} exact component={UserList} />
			</Switch>
		</Router>
	)
}

export default App

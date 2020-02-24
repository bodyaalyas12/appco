import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import UserList from './components/UserList.jsx'
import UserProfile from './components/UserProfile.jsx'
import './scss/style.scss'

const App = () => {
	return (
		<Router basename="/appco">
			<Switch>
				<Route path={'/'} exact component={Landing} />
				<Route path={'/users'} exact component={UserList} />
				<Route path={'/users/:id'} exact component={UserProfile} />
			</Switch>
		</Router>
	)
}

export default App

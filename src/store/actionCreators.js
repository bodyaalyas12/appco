import host from '../host'
import { GET_USERS } from './actionTypes'

export const getUsers = (page, itemsOnPage) => dispatch => {
	console.log(page, itemsOnPage)
	fetch(`${host}/users?page=${page}&itemsOnPage=${itemsOnPage}`, {
		method: 'GET'
	})
		.then(response => response.json())
		.then(response => {
			dispatch({
				type: GET_USERS,
				payload: response.userList
			})
		})
}
export const getUsersStatictics = (page, itemsOnPage) => dispatch => {
	console.log(page, itemsOnPage)
	fetch(`${host}/usersStat`, {
		method: 'GET'
	})
		.then(response => response.json())
		.then(response => {
			// dispatch({
			// 	type: GET_USERS,
			// 	payload: response.userList
            // })
            console.log(response)
		})
}
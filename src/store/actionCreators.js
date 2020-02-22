import host from '../host'
import { GET_USERS, GET_USER_STATISTIC } from './actionTypes'

export const getUsers = (page, itemsOnPage) => dispatch => {
	console.log(page, itemsOnPage)
	fetch(`${host}/users?page=${page}&itemsOnPage=${itemsOnPage}`, {
		method: 'GET'
	})
		.then(response => response.json())
		.then(response => {
			dispatch({
				type: GET_USERS,
				payload: response
			})
		})
}
export const getUserStatictic = (id, dateRange = {}) => dispatch => {
	const { startDate, endDate } = dateRange
	const queryString =
		startDate && endDate ? `${id}?startDate=${startDate}&endDate=${endDate}` : `${id}`
	console.log(startDate)
	fetch(`${host}/users/${queryString}`, {
		method: 'GET'
	})
		.then(response => response.json())
		.then(response => {
			dispatch({
				type: GET_USER_STATISTIC,
				payload: response
			})
		})
}

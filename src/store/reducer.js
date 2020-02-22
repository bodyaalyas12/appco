import { GET_USERS, GET_USER_STATISTIC } from './actionTypes'

const initialState = {
	users: {
		userList: [],
		numberOfItems: 0
	},
	userStatistic: {}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return { ...state, users: action.payload }
		case GET_USER_STATISTIC:
			return { ...state, userStatistic: action.payload }
		default:
			return state
	}
}

export default reducer

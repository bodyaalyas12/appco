import React, { useEffect, useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsers } from '../store/actionCreators'

const UserList = ({ getUsers, users }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [pagginationArray, setPaginationArray] = useState([1, 2, 3, 4, 5])
	useEffect(() => {
		getUsers(1, 50)
	}, [])
	const paginationHandler = page => {
		setCurrentPage(page)
		if (page > 3) {
			setPaginationArray(new Array(5).fill(page).map((item, index) => item + index - 2))
		} else {
			setPaginationArray([1, 2, 3, 4, 5])
		}
		getUsers(page, 50)
	}
	return (
		<div>
			<Header />
			<div className={'container'}>
				<div className={'d-flex breadcrumbs'}>
					<Link to={'/'}>Main page</Link> >{' '}
					<Link className={'active'} to={'/users'}>
						User statictics
					</Link>
				</div>
				<div className={'content_header mb-3'}>
					<strong>User Statistics</strong>
				</div>
				<div className={'d-flex flex-column'}>
					<div className={'table_header d-flex '}>
						<div style={{ width: '5.5%' }}>id</div>
						<div style={{ width: '12.5%' }}>First Name</div>
						<div style={{ width: '12.5%' }}>Last Name</div>
						<div style={{ width: '19.5%' }}>Email</div>
						<div style={{ width: '12.5%' }}>Gender</div>
						<div style={{ width: '12.5%' }}>IP adress</div>
						<div style={{ width: '12.5%' }}>Total clicks</div>
						<div style={{ width: '12.5%' }}>Total page views</div>
					</div>
					{users.map(user => (
						<div key={user.id} className={'table_item d-flex flex-column flex-lg-row'}>
							<div style={{ width: '5.5%' }}>{user.id}</div>
							<div style={{ width: '12.5%' }}>{user.first_name}</div>
							<div style={{ width: '12.5%' }}>{user.last_name}</div>
							<div style={{ width: '19.5%' }}>{user.email}</div>
							<div style={{ width: '12.5%' }}>{user.gender}</div>
							<div style={{ width: '12.5%' }}>{user.ip_address}</div>
							<div style={{ width: '12.5%' }}>{user.totalClicks}</div>
							<div style={{ width: '12.5%' }}>{user.totalViews}</div>
						</div>
					))}
				</div>
				<div className={'pagination my-4'}>
					<div className={'d-flex justify-content-center w-100'}>
						{pagginationArray.map(pgItem => (
							<button
								key={pgItem}
								onClick={e => paginationHandler(pgItem)}
								className={pgItem === currentPage ? 'pagination_item active' : 'pagination_item'}
							>
								{pgItem}
							</button>
						))}
						{/* <button className={'pagination_item'}>{currentPage+1}</button>
                    <button className={'pagination_item'}>{currentPage+2}</button>
                    <button className={'pagination_item'}>{currentPage+3}</button>
                    <button className={'pagination_item'}>{currentPage+4}</button> */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	...props,
	users: state.users
})

const mapDispatchToProps = dispatch => ({
	getUsers: (page, itemsOnPage) => dispatch(getUsers(page, itemsOnPage))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)

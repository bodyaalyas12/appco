import React, { useEffect, useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsers } from '../store/actionCreators'
import arrow from '../images/keyboard_arrow_right-24px.svg'
import { ReactSVG } from 'react-svg'

const UserList = ({ getUsers, users, numberOfPages }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [pagginationArray, setPaginationArray] = useState([1, 2, 3, 4, 5])
	useEffect(() => {
		getUsers(1, 50)
	}, [])
	const paginationHandler = page => {
		setCurrentPage(page)
		if (page > 3 && page < numberOfPages) {
			setPaginationArray(
				new Array(5)
					.fill(page)
					.map(
						(item, index, arr) =>
							item + index - parseInt(arr.length / 2) <= numberOfPages &&
							item + index - parseInt(arr.length / 2)
					)
			)
		} else if (page < 3) {
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
				<div className={'d-none d-lg-flex flex-column'}>
					<div className={'table_header d-flex '}>
						<div style={{ width: '7.5%' }}>id</div>
						<div style={{ width: '12.5%' }}>First Name</div>
						<div style={{ width: '12.5%' }}>Last Name</div>
						<div style={{ width: '19.5%' }}>Email</div>
						<div style={{ width: '12.5%' }}>Gender</div>
						<div style={{ width: '12.5%' }}>IP adress</div>
						<div style={{ width: '11.5%' }}>Total clicks</div>
						<div style={{ width: '11.5%' }}>Total page views</div>
					</div>
					{users.map(user => (
						<Link className={'custom_link'} key={user.id} to={`/users/${user.id}`}>
							<div className={'table_item d-flex flex-column flex-lg-row'}>
								<div style={{ width: '7.5%' }}>
									<span>{user.id}</span>
								</div>
								<div style={{ width: '12.5%' }}>
									<span>{user.first_name}</span>
								</div>
								<div style={{ width: '12.5%' }}>
									<span>{user.last_name}</span>
								</div>
								<div style={{ width: '19.5%' }}>
									<span>{user.email}</span>
								</div>
								<div style={{ width: '12.5%' }}>
									<span>{user.gender}</span>
								</div>
								<div style={{ width: '12.5%' }}>
									<span>{user.ip_address}</span>
								</div>
								<div style={{ width: '11.5%' }}>
									<span>{user.totalClicks}</span>
								</div>
								<div style={{ width: '11.5%' }}>
									<span>{user.totalViews}</span>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div className={'d-flex d-lg-none'}>
					<div className={'d-flex flex-column w-100'}>
						{users.map(user => (
							<Link className={'custom_link mobile_custom_link'} key={user.id} to={`/users/${user.id}`}>
								<div className={'d-flex justify-content-between mobile_table_item'}>
									<div className={'mobile_label'}>id</div>
									<div className={'mobile_value'}>{user.id}</div>
								</div>
								<div className={'d-flex justify-content-between mobile_table_item'}>
									<div className={'mobile_label'}>First Name</div>
									<div className={'mobile_value'}>{user.first_name}</div>
								</div>
								<div className={'d-flex justify-content-between mobile_table_item'}>
									<div className={'mobile_label'}>Last Name</div>
									<div className={'mobile_value'}>{user.last_name}</div>
								</div>
								<div className={'d-flex justify-content-between mobile_table_item'}>
									<div className={'mobile_label'}>Email</div>
									<div className={'mobile_value'}>{user.email}</div>
								</div>
								<div className={'d-flex justify-content-between mobile_table_item'}>
									<div className={'mobile_label'}>Gender</div>
									<div className={'mobile_value'}>{user.gender}</div>
								</div>
								<div className={'d-flex justify-content-between mobile_table_item'}>
									<div className={'mobile_label'}>IP adress</div>
									<div className={'mobile_value'}>{user.ip_address}</div>
								</div>
								<div className={'d-flex justify-content-between mobile_table_item'}>
									<div className={'mobile_label'}>Total clicks</div>
									<div className={'mobile_value'}>{user.totalClicks}</div>
								</div>
								<div className={'d-flex justify-content-between mobile_table_item'}>
									<div className={'mobile_label'}>Total views</div>
									<div className={'mobile_value'}>{user.totalViews}</div>
								</div>

								{/* <div className={'table_item d-flex flex-column flex-lg-row'}>
								<div style={{ width: '7.5%' }}>
									<span>{user.id}</span>
								</div>
								<div style={{ width: '12.5%' }}>
									<span>{user.first_name}</span>
								</div>
								<div style={{ width: '12.5%' }}>
									<span>{user.last_name}</span>
								</div>
								<div style={{ width: '19.5%' }}>
									<span>{user.email}</span>
								</div>
								<div style={{ width: '12.5%' }}>
									<span>{user.gender}</span>
								</div>
								<div style={{ width: '12.5%' }}>
									<span>{user.ip_address}</span>
								</div>
								<div style={{ width: '11.5%' }}>
									<span>{user.totalClicks}</span>
								</div>
								<div style={{ width: '11.5%' }}>
									<span>{user.totalViews}</span>
								</div>
							</div> */}
							</Link>
						))}
					</div>
				</div>
				<div className={'pagination my-4'}>
					<div className={'d-flex align-items-center justify-content-center w-100'}>
						<ReactSVG
							src={arrow}
							className={currentPage === 1 ? 'react_svg' : 'react_svg active'}
							style={{ transform: 'rotate(180deg)' }}
							onClick={e => paginationHandler(currentPage - 1)}
						/>
						{pagginationArray.map(
							pgItem =>
								pgItem && (
									<button
										key={pgItem}
										onClick={e => paginationHandler(pgItem)}
										className={
											pgItem === currentPage ? 'pagination_item active' : 'pagination_item'
										}
									>
										{pgItem}
									</button>
								)
						)}
						<ReactSVG
							className={currentPage === numberOfPages ? 'react_svg' : 'react_svg active'}
							src={arrow}
							onClick={e => paginationHandler(currentPage + 1)}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	...props,
	users: state.users.userList,
	numberOfPages: state.users.numberOfPages
})

const mapDispatchToProps = dispatch => ({
	getUsers: (page, itemsOnPage) => dispatch(getUsers(page, itemsOnPage))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)

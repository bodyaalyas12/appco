import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getUserStatictic } from '../store/actionCreators'
import options from './chartOptions'
import Footer from './Footer'
import Header from './Header'
import { GET_USER_STATISTIC } from '../store/actionTypes'

const UserProfile = ({ userStatistic = [1], getUserStatictic, userInfo = {}, clearUser }) => {
	const clickSeries = [
		{
			name: 'series-1',
			data: userStatistic.map(item => ({
				x: new Date(item.date).getTime(),
				y: item.clicks
			}))
		}
	]
	const viewsSeries = [
		{
			name: 'series-1',
			data: userStatistic.map(item => ({
				x: new Date(item.date).getTime(),
				y: item.page_views
			}))
		}
	]
	const [focusedInput, setFocusedInput] = useState('')
	const { id } = useParams()
	useEffect(() => {
		getUserStatictic(id)
		return () => {
			clearUser()
		}
	}, [])
	const [dateRange, setDateRange] = useState({})
	const dateChangeHandler = date => {
		setDateRange({ ...date })
	}
	const falseFunc = () => false
	console.log(new Date('2019-10-03') < new Date('2019-10-01'))
	const dateFilterHandler = () => {
		if (dateRange.startDate && dateRange.endDate) {
			getUserStatictic(id, { ...dateRange })
		} else {
			getUserStatictic(id)
		}
	}
	return (
		<>
			<Header />
			<div className={'container'}>
				<div className={'d-flex breadcrumbs'}>
					<Link to={'/'}>Main page</Link> > <Link to={'/users'}>User statistics</Link> >
					<a className={'active'}>
						{userInfo.first_name} {userInfo.last_name}
					</a>
				</div>
				<div className={'content_header mb-3 d-flex justify-content-between '}>
					<strong>
						{userInfo.first_name} {userInfo.last_name}
					</strong>
				</div>
				<div>
					<DateRangePicker
						startDate={dateRange.startDate}
						startDateId="your_unique_start_date_id"
						endDate={dateRange.endDate}
						endDateId="your_unique_end_date_id"
						onDatesChange={dateChangeHandler}
						focusedInput={focusedInput}
						onFocusChange={focusedInput => setFocusedInput(focusedInput)}
						showClearDates={true}
						enableOutsideDays={true}
						isOutsideRange={falseFunc}
					/>
					<button onClick={dateFilterHandler} className={'ml-3 purchase_now'}>
						Filter
					</button>
					{userStatistic.length === 0 && (
						<h5 className={'text-danger'}>No statistic for this period</h5>
					)}
				</div>
				<h4 className={'description_label text-left'}>
					<strong>Clicks</strong>
				</h4>

				<Chart options={options} series={clickSeries} type="line" />
				<h4 className={'description_label text-left'}>
					<strong>Views</strong>
				</h4>
				<Chart options={options} series={viewsSeries} type="line" />
			</div>
			<Footer />
		</>
	)
}

const mapStateToProps = (state, props) => ({
	...props,
	userStatistic: state.userStatistic.userStatistic,
	userInfo: state.userStatistic.userInfo
})

const mapDispatchToProps = dispatch => ({
	getUserStatictic: (id, dateRange) => dispatch(getUserStatictic(id, dateRange)),
	clearUser: () => dispatch({ type: GET_USER_STATISTIC, payload: {} })
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)

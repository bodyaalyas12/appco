import React, { useEffect } from 'react'
import mobile from './images/mobile-min.png'
import creativeThinking from './images/creativeThinking.png'
import secure from './images/secure.png'
import devices from './images/devices.png'
import macBook from './images/macbook-min.png'
import onlineTest from './images/undraw_online_test_gba.png'
import quizNlyh from './images/undraw_quiz_nlyh.png'
import fileSyncOt from './images/undraw_file_sync_ot.png'

import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
	useEffect(() => {
		fetch('http://localhost:4000')
			.then(response => response.json())
			.then(response => console.log(response))
	}, [])

	const descriptionItems = [
		{
			image: creativeThinking,
			label: 'Clean Design',
			text: 'Increase sales by showing true dynamics of your website.'
		},
		{
			image: secure,
			label: 'Secure Data',
			text: 'Build your online store’s trust using Social Proof & Urgency.'
		},
		{
			image: devices,
			label: 'Retina Ready',
			text: 'Realize importance of social proof in customer’s purchase decision.'
		}
	]
	const pricingItems = [
		{
			image: onlineTest,
			label: 'Basic',
			price: '$29',
			text: 'Increase sales by showing true dynamics of your website.'
		},
		{
			image: fileSyncOt,
			label: 'Standard',
			price: '$149',
			text: 'Build your online store’s trust using Social Proof & Urgency.'
		},
		{
			image: quizNlyh,
			label: 'Unlimited',
			price: '$39',
			text: 'Realize importance of social proof in customer’s purchase decision.'
		}
	]
	return (
		<div className="app">
			{/* ------------------------------------------HEADER--------------------------------------- */}
			<div className={'header'}>
				<div className={'container'}>
					<div className={'row '}>
						<div className={'col-12 col-lg-6'}>
							<h4 className={'header_text'}>AppCo</h4>
							<h3 className={'header_text-lg'}>
								<strong>Brainstorming</strong> for desired perfect Usability
							</h3>
							<h6 className={'header_text-sm'}>
								Our design projects are fresh and simple and will benefit your business greatly.
								Learn more about our work!
							</h6>
							<button className={'my_button'}>View Stats</button>
						</div>
						<div className={'col-12 d-flex justify-content-center col-lg-6'}>
							<img className={'mobile_img'} src={mobile} />
							<div className={'mobile_blur'} />
						</div>
					</div>
				</div>
			</div>
			{/* ------------------------------------------HEADER--------------------------------------- */}
			{/* ------------------------------------------DESCRIPTION--------------------------------------- */}
			<div className={'container'}>
				<div className={'d-flex flex-column'}>
					<div className={'d-flex justify-content-center'}>
						<h4 className={'content_header text-center'}>
							Why <strong>small business owners love</strong> AppCo?
						</h4>
					</div>
					<div className={'d-flex justify-content-center'}>
						<h6 className={'content_description'}>
							Our design projects are fresh and simple and will benefit your business greatly. Learn
							more about our work!
						</h6>
					</div>
					<div className={'row description_wrapper no-gutters'}>
						{descriptionItems.map((item, index) => (
							<div key={index} className={'col-lg-4'}>
								<div className={'description_item'}>
									<div className={'d-flex justify-content-center'}>
										<img src={item.image} />
									</div>
									<div className={'d-flex justify-content-center'}>
										<h6 className={'description_label'}>{item.label}</h6>
									</div>
									<div className={'d-flex justify-content-center'}>
										<div className={'description_text'}>{item.text}</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* ------------------------------------------DESCRIPTION--------------------------------------- */}
			{/* ------------------------------------------LEARN MORE--------------------------------------- */}
			<div className={'learnMore_wrapper'}>
				<div className={'container '}>
					<div className={'row no-gutters'}>
						<div className={'col-xl-6 col-12 d-flex flex-column'}>
							<div className={'learnMore_header'}>
								Start Managing your apps business, more faster
							</div>
							<div className={'learnMore_text'}>
								Objectively deliver professional value with diverse web-readiness. Collaboratively
								transition wireless customer service without goal-oriented catalysts for change.
								Collaboratively.
							</div>
							<div>
								<button className={'my_button_learnMore'}>Learn More</button>
							</div>
						</div>
						<div className={'col-xl-6 col-12 '}>
							<img className={'macbook_img'} src={macBook} />
						</div>
					</div>
				</div>
			</div>
			{/* ------------------------------------------LEARN MORE--------------------------------------- */}
			{/* ------------------------------------------PRICING--------------------------------------- */}
			<div className={'pricing_wrapper'}>
				<div className={'container'}>
					<div className={'d-flex flex-column'}>
						<div className={'d-flex justify-content-center'}>
							<h4 className={'content_header text-center'}>
								<strong>Afforadble Pricing and Packages</strong> choose your best one
							</h4>
						</div>
						<div className={'d-flex justify-content-center'}>
							<h6 className={'content_description'}>
								Monotonectally grow strategic process improvements vis-a-vis integrated resources.
							</h6>
						</div>
						<div className={'row description_wrapper no-gutters'}>
							{pricingItems.map((item, index) => (
								<div key={index} className={'col-lg-4'}>
									<div className={'description_item'}>
										<div className={'d-flex justify-content-center'}>
											<h6 className={'pricing_label'}>{item.label}</h6>
										</div>
										<div className={'d-flex justify-content-center'}>
											<img src={item.image} />
										</div>
										<div className={'d-flex justify-content-center'}>
											<h6
												className={
													item.label === 'Standard' ? 'pricing_price standart' : 'pricing_price'
												}
											>
												{item.price}
											</h6>
										</div>
										<div className={'d-flex justify-content-center'}>
											<div className={'description_text'}>{item.text}</div>
										</div>
										<div className={'d-flex justify-content-center'}>
											<button className={'purchase_now'}>Purchase now</button>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className={'d-flex justify-content-center'}>
							<h6 className={'content_description'}>
								If you need custom services or Need more? <a className={'contact_us'}>Contact us</a>
							</h6>
						</div>
					</div>
				</div>
			</div>
			{/* ------------------------------------------PRICING--------------------------------------- */}
			{/* ------------------------------------------FOOTER--------------------------------------- */}
			<div className={'footer_wrapper'}>
				<div className={'container'}>
					<div className={'d-flex justify-content-center'}>
						<div className={'position-relative subscribe_input_wrapper'}>
							<input type="text" placeholder="Enter your email" className={'subscribe_input'} /><button className={'subscribe_button'}>Subscribe</button>
						</div>
					</div>
					<div className={'d-flex align-items-center justify-content-between footer_copyright'}>
						<div className={'footer_company'}>AppCo</div>
						<div>All rights reserved by ThemeTags</div>
						<div>Copyrights © 2019.</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

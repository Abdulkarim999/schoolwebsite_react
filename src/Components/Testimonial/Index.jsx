import React from 'react'
import './Testimonial.css'
import { testimonial } from '../../data'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import Divider from '../Divider/Index'

const Testimonial = () => {
	const settings = {

		infinite: true,
		speed: 500,
		slidesToShow: 2,
		pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},
		]

	}
  return (
	<section id='testimonial'>
		<div className="container">
			<h1 className='title'>
				Client <span className='text_gradient'>Testimonies</span>
			</h1>
			<Divider/>
			<Slider
			{...settings}
			className="clients_container"
			>
				{
					testimonial.map((list,index)=>(
						<React.Fragment key={index}>
							<div className="stars_container">
								<FaStar/>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>

							<p className='text_muted content'>{list.review}</p>
							<div className="user_row">
								<div className="profile">
									<img src={list.image} alt={list.name} />
								</div>
								<div className="details">
									<h3 className='name'>{list.name}</h3>
									<small>CEO ofixa</small>
								</div>
							</div>
						</React.Fragment>
					))
				}

			</Slider>
		</div>
	</section>
	
  )
}

export default Testimonial
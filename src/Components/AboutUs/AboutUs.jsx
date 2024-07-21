import React from 'react'
import './AboutUs.css'
import { students } from '../../assets'
import { about } from '../../data'

const AboutUs = () => {
  return (
	<section id='about-us'>
		<div className="container">
			<div className="column students_photo primary-effect">
				<img src={students} alt="" />
			</div>
			<div className="column about_cards_container">
				{
					about.map((list, index)=>(
						<div className="about_card" key={index}>
							<div className="icon_container" style={{background:list.color}}>
								{list.icon}
							</div>
							<h3 className='name'>{list.title}</h3>
							<p className='text_muted'>{list.description}</p>
						</div>
					))
				}

			</div>
		</div>
	</section>
  )
}

export default AboutUs
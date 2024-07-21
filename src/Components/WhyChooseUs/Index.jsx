import React from 'react'
import './WhyChooseUs.css'
import Divider from '../Divider/Index'
import { whyChooseUs } from '../../data'

const WhyChooseUs = () => {
  return (
	<section id='why-choose-us'>
		<div className="container">
			<h1 className="title">
				Why <span className='text_gradient'>Choose Us</span>
             </h1>
			 <Divider/>
			 <div className="why_choose_us_container">
				{
					whyChooseUs.map((list,index)=>(
						<div className="choose_us_card" key={index}>
						<div className="icon_container">{list.icon}</div>
						<h3 className='name'>{list.name}</h3>
						<p className='text_muted description'>{list.description}</p>
						<button className='btn btn_primary'>Read more</button>
						</div>
					))
				}
			 </div>
			</div>
	</section>
  )
}

export default WhyChooseUs
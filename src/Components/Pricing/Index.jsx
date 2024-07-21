import React from 'react'
import './Pricing.css'
import Divider from '../Divider/Index'
import {pricing} from '../../data'
import { FaCheck } from 'react-icons/fa6'
const Pricing = () => {
  return (
	<section id='pricing'>
		<div className="container">
			<h1 className="title">
				Choose <span className='text_gradient'>A Package</span>
			</h1>
			<Divider/>
			<div className="pricing_container">
				{
					pricing.map((list,index)=>(
						<div className="pricing_card" key={index}>
							<h3 className="name">{list.name}</h3>
							<div className="price_container">
								<h1>{list.price}</h1>
								<span>/month</span>
							</div>
							<div className="benefits_container">
								{
									list.benefits.map((benefit,i)=>(
										<div className="benefit" key={i}>
											<div className="icon"><FaCheck/></div>
											<p className='text_muted'>{benefit}</p>
										</div>
									))
								}
							</div>
							<button className='btn'>Get Started</button>
						</div>
					))
				}
			</div>
		</div>
	</section>
  )
}

export default Pricing
import React from 'react'
import './Contact.css'
import SocialHandles from '../../SocialHandles/Index'

const Contact = () => {
  return (
	<section id='contact'>
		<div className="container">
			<h1 className='title'>
				<span className='text_gradient'>Contact Us</span>
			</h1>
			<p className="text_muted description">
				Lorem, ipsum dolor sit amet consectetur adipisicing
				 elit. Nesciunt atque vel iste sunt minus incidunt 
				 magnam, dicta nam debitis optio eius! Delectus asperiores
				 rem repellendus eligendi magni odio magnam molestiae.
			</p>
			<button className='btn btn_primary'>Let us talk</button>
			<SocialHandles/>
		</div>

	</section>
  )
}

export default Contact
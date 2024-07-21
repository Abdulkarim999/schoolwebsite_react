import React from 'react'
import "./SocialHandles.css"
import { socialHandles } from '../data'

const SocialHandles = () => {
  return (
	<div className="social_handles_container">
		{
			socialHandles.map((handle,index)=>(
				<a href={handle.link} className='icon_container handle' key={index}>
					{handle.icon}
				</a>
			))
		}
	</div>
  )
}

export default SocialHandles
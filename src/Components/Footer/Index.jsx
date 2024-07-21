import React from 'react'
import './Footer.css'
import { footer } from '../../data'
import {Link} from 'react-scroll'
import Logo from '../Logo/Index'

const Footer = () => {
  return (
	<footer id='footer'>
		<div className="container">
			<div className="row">
				{
					footer.map((list,index)=>(
						<div className="column" key={index}>
							<h3 className='group_name'>{list.group}</h3>
							<div className="routes_container">
								{
									list.routes.map((route,i)=>(
										<Link to={route.routeId || "#"} className='route_item' key={i}>
										{
											route.icon ? <div className='icon_container'>{route.icon}</div>:""
										}
										<p className='name'>{route.name}</p>
										</Link>
									))
								}
							</div>
						</div>
					))
				}
				<div className="column">
					<Logo/>
					<form action="" className='newsletter'>
						 <h3>Get weekly update</h3>
						 <div className="control_container">
							<input type="email" name="" className='control' id="" placeholder='Enter your email address' />
							<button className='btn' type='button'>Subscribe</button>
						 </div>
					</form>
				</div>
			</div>
			<article className='copyright_container'>
				<h3>Copyright &copy; All right reserved - | 2024</h3>
				<p className='text_muted'>Built by Makix Ltd</p>
			</article>
		</div>
	</footer>
  )
}

export default Footer
import React,{useRef} from 'react'
import './Hero.css'
import { Link } from 'react-scroll'
import { student_pic } from '../../assets'
import { IoMdStar } from 'react-icons/io'
import FunFacts from '../FunFacts/Index'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Hero = () => {
	const container = useRef(null)
	useGSAP(()=>{
		const timeline = gsap.timeline({delay:.5})
		timeline
		.fromTo(
			".media_group",
			{scale:0.5,opacity:0},
			{ scale:1, opacity:1},
		)
		.from(
			".title",
			{opacity:0}
		)
			.from(
				".description",
				{ opacity: 0 }
			)
			.from(
				".buttons_group",
				{ x:-40,opacity:0 }
			)	
		  
		},{scope:container})
	
  return (
	<header id='hero' ref={container}>
		<div className="container fiull_height">
			<div className="group info">
				<h1 className="title">
					Study Together With 
					<span className='text_gradient'>
                     CoursePo
					</span>
					Anywhere
				</h1>
				<p className="description text_muted">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas laboriosam rem ab molestias atque eius sapiente adipisci consequuntur, accusamus, blanditiis tempore aliquam. Iure at dolorum, culpa accusamus quas cum?
				</p>
				<div className="buttons_group">
                  <Link to='focus-base' className='btn btn_primary'>Explore more</Link>
					  <Link to='contact' className='btn '>Get Started</Link>
				</div>
				<FunFacts/>
			</div>
		
		<div className="group">
			<div className="media_group">
				<img src={student_pic} alt="" />
				<div className="rating_container">
					<h1>Excellent</h1>
					<div className="stars_container">
						<div className="icon_container"><IoMdStar/></div>
						<div className="icon_container"><IoMdStar /></div>
						<div className="icon_container"><IoMdStar /></div>
				     	<div className="icon_container"><IoMdStar /></div>
						<div className="icon_container"><IoMdStar /></div>
					</div>
					<p>Base on 1000+ reviews</p>
					<h3>Trustpilot</h3>
				</div>
			</div>
		</div>
	</div>
	</header>
  )
}

export default Hero
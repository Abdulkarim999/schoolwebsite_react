import React, { useEffect, useRef, useState } from 'react'
import './FunFacts.css'
import Odometer from 'react-odometerjs'
import { GiTeacher } from 'react-icons/gi'
import { FaBookAtlas } from 'react-icons/fa6'
import { PiStudentBold } from 'react-icons/pi'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const FunFacts = () => {
	const container = useRef(null)
	const [instructors,setInstructors] = useState(0)
	const [students, setStudents] = useState(0)
	const [courses, setCourses] = useState(0)
	useEffect(()=>{
		const timeoutId = setTimeout(()=>{
			setInstructors(155);
			setStudents(2500);
			setCourses(7000);
		},3000)
		return () => {
			clearTimeout(timeoutId)
		}
	},[])
	useGSAP(()=>{
		const timeline = gsap.timeline({delay:2});
		timeline
		.from(
			".fact_item",
			{x:-100,stagger:.5,opacity:0}
		)
	},{scope:container})
  return (
	<div className="fun_facts blur-effect" ref={container}>
		<div className="fact_item">
			  <div className="icon_container" style={{background:'var(--color-success)'}}>
				<GiTeacher/>
			  </div>
				<div className="count_container">
					<Odometer
					value={instructors}
					className='title'
					/>
					<div className="title">+</div>	
				</div>
			<p className='text_muted'>Certified Professional Instructor</p>
		</div>

		  
			  <div className="fact_item">
			  <div className="icon_container" style={{ background: 'blue'}}>
					<PiStudentBold/>
				  </div>
				  <div className="count_container">
					  <Odometer
						  value={students}
						  className='title'
					  />
					  <div className="title">+</div>
				  </div>
				  <p className='text_muted'>Students around the world</p>
			  </div>

			  
				<div className="fact_item">
			    <div className="icon_container" style={{ background: 'red' }}>
				     <FaBookAtlas />
					  </div>
					  <div className="count_container">
						  <Odometer
							  value={courses}
							  className='title'
						  />
						  <div className="title">K</div>
					  </div>
					  <p className='text_muted'>Courses on all areas</p>
				  </div>


	</div>
  )
}

export default FunFacts
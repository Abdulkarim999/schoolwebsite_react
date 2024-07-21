import React, { useState } from 'react'
import './Navbar.css'
import {menus} from "../../data"
import {Link} from 'react-scroll'
import { FaArrowRightLong } from 'react-icons/fa6'
import Logo from '../Logo/Index'
import { FaTimes } from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'

const Navbar = () => {
	const [open,setOpen] = useState(false);
  return (
	<nav className='navbar'>
		  {open ? (<div className='sidebar_overlay' onClick={() => setOpen(!open)}></div>):''}
		<Logo/>
		<div className={`column hamburger ${open ? 'visible':''}`}>
			<div className="menu_group">
				<div className="icon_container cancel_btn" onClick={()=>setOpen(!open)}>
                  <FaTimes/>
				</div>
				{
					menus.map((menu,Index)=>(
						<Link
						to={menu.routeId}
						className='item'
						activeClass='text_gradient'
						smooth={true}
						spy={true}
						offset={-70}
						onClick={()=>setOpen(!open)}
                        key={Index}
						>
							{menu.name}
						</Link>
					))

				}
			</div>
		</div>
		<div className="column">
		<Link to='contact' className='btn contact_btn'>Get Started <FaArrowRightLong/> </Link>
			  <div className="icon_container menu_btn" onClick={() => setOpen(!open)}>
            <RiMenu3Fill/>
		</div>
	</div>
	</nav>
	
  )
}

export default Navbar

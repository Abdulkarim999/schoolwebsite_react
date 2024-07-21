import React from 'react'
import './Categories.css'
import { categories } from '../../data'
import Divider from '../Divider/Index'

const Categories = () => {
  return (
	<div id='categories'>
		<div className="container">
			<h1 className='title text_gradient'>Categories</h1>
			<Divider/>
			<div className="categories_container">
				<div className="categories">
					{
						categories.map((category,index)=>(
						<div className="category" key={index}>
							<div className="row">
								<div className="icon_container">
									{category.icon}
								</div>
								<div className="details">
									<h3 className='name'>{category.name}</h3>
									<p className='text_muted'>{category.courseCount} courses</p>

								</div>
							</div> 
						</div>
                     ))
					}
				</div>
				  <div className="categories">
					  {
						  categories.map((category, index) => (
							  <div className="category" key={index}>
								  <div className="row">
									  <div className="icon_container">
										  {category.icon}
									  </div>
									  <div className="details">
										  <h3 className='name'>{category.name}</h3>
										  <p className='text_muted'>{category.courseCount} courses</p>

									  </div>
								  </div>
							  </div>
						  ))
					  }
				  </div>
			</div>
		</div>
	</div>
  )
}

export default Categories
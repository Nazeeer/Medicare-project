import React from 'react'
import {Services} from '../../assets/data/portfolioData.js'
import ServicesCard from './ServicesCard'
const ServicesList = () => {
  return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            {Services.map((item , index)=>{
                <ServicesCard item={item} index={index} key={index}/>
            })}
        </div>

  )
}

export default ServicesList
import React from 'react'

const ServicesCard = ({item , index}) => {
    const {title,description}= item
  return (
    <div className='py-[30px] px-3 lg:px-5'>
        <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
            {title}
        </h2>
        <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 '>
            {description}
        </p>
    </div>
  )
}

export default ServicesCard
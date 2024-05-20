import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
const Services = () => {
  const servic =[
    {
      title:"Cancer Care ",
      pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
      bgColor:'#3591c9',
      textColor:'white',
      
    },
    {
      title:"Labor & Delivery ",
      pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
      bgColor:'#3591c9',
      textColor:'white',
    },
    {
      title:"Heart & Vascular ",
      pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
      bgColor:'#3591c9',
      textColor:'white',
    },
    {
      title:"Mental Health ",
      pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
      bgColor:'#3591c9',
      textColor:'white',
    },
    {
      title:"Neurology ",
      pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
      bgColor:'#3591c9',
      textColor:'white',
    },
    {
      title:"Burn Treatment ",
      pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
      bgColor:'#3591c9',
      textColor:'white',
    },
  ]
  return (
    <div className='my-[20px]'>
    <div className="xl:w-[470px] mx-auto">
                  <h2 className="heading text-center">
                    Our medical services
                  </h2>
                  <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Illo, error. Iure facilis sapiente repudiandae mollitia 
                  voluptas, illum adipisci neque tempora.</p>
                </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          {servic.map((name , i )=><div key={i} className="service">
              <h3 className='heading '>{name.title}</h3>
              <p className='text__para'>{name.pragragh}</p>
              <div className="flex flex items-center justify-between mt-[30px]">
              <Link to="doctors" className='transition duration-700 ease-in-out w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5 "/>
              </Link>
              <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]'
              style={{
                background:`${name.bgColor}`,
                color: `${name.textColor}`,
                borderRadius: "6px 0 0 6px"
              }}
              >
                {i + 1}
              </span>
              </div>
            </div>)}

        </div>
    </div>
  )
}

export default Services
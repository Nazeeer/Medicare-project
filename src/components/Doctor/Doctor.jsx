import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import doctorImage from '../../assets/images/doctor2.jpeg'
import doctorImage2 from '../../assets/images/doctor1.jpeg'
const Doctor = () => {
    const doctor =[
        {
            name:"Dr. Mohamed Mahmoud",
            pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
            bgColor:'#3591c9',
            textColor:'white',
            gender:"male"
            
            },
            {
            name:"Dr. Ahmed Mohamed",
            pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
            bgColor:'#3591c9',
            textColor:'white',
            gender:"male"
            },
            {
            name:"Dr. Mahmoud Ahmed",
            pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
            bgColor:'#3591c9',
            textColor:'white',
            gender:"male"
            },
            {
            name:"Dr. ziad Adel",
            pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
            bgColor:'#3591c9',
            textColor:'white',
            gender:"male"
            },
            {
            name:"Dr. Eman Mostafa",
            pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
            bgColor:'#3591c9',
            textColor:'white',
            gender:"female"
            },
            {
            name:"Dr. Nora saad",
            pragragh:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius libero eligendi repellendus qui doloremque tempore!",
            bgColor:'#3591c9',
            textColor:'white',
            gender:"female"
            },
        ]
    
    
    return (
    <div className='my-[40px]'>
                <div className="xl:w-[470px] mx-auto">
                  <h2 className="heading text-center">
                    Our Great Doctors
                  </h2>
                  <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Illo, error. Iure facilis sapiente repudiandae mollitia 
                  voluptas, illum adipisci neque tempora.</p>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          {doctor.map((doctorName , i )=><div key={i} className="service">
            <div className="flex flex items-center justify-between mt-[30px]">
              <h3 className='heading '>{doctorName.name}</h3>
              {doctorName.gender ==="male" ? <img className='w-[75px] rounded-full' src={doctorImage} alt="" />: <img className='w-[75px] rounded-full' src={doctorImage2} alt="" />}
            </div>
              <p className='text__para'>{doctorName.pragragh}</p>
              <div className="flex flex items-center justify-between mt-[30px]">
              <Link to="doctors" className='transition duration-700 ease-in-out w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5 "/>
              </Link>
              <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]'
              style={{
                background:`${doctorName.bgColor}`,
                color: `${doctorName.textColor}`,
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

export default Doctor
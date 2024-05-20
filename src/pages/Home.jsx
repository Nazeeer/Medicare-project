import React from 'react'
import heroImage from '../assets/images/hero.jpg'
import heroImage2 from '../assets/images/hero1.jpeg'
import heroImage3 from '../assets/images/hero3.jpg'
import icon01 from '../assets/images/icon-doctor.png'
import icon02 from '../assets/images/find-doctor.png'
import icon03 from '../assets/images/medicine.png'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import About  from '../components/About/About'
import Services  from '../pages/Services'
import featureImg from '../assets/images/featureImg.jpg'
import Doctor from '../components/Doctor/Doctor'
import faqSection from '../assets/images/faqSection.jpg'
import Contact from './Contact'
// import Testimonial from '../components/Testimonial/Testimonial'
const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] '>
                  We help patients live a healthy, longer life
                  </h1>
                  <p className='text__para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Pariatur consequatur eaque quaerat? Beatae reprehenderit necessitatibus neque, 
                  tenetur, natus consectetur voluptas pariatur eaque quo repudiandae 
                  at vero sequi corrupti temporibus iure!</p>
                  <button className='btn'> Request an Appointment </button>
              </div>
            {/* hero counter */}


            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor]'>30+</h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Years of Experience</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor]'>15+</h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Clinic Location </p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor]'>100%</h2>
                <span className='w-[100px] h-2 bg-irisBlueColor  rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Patient Satisfaction</p>
              </div>


            </div>
            </div>


           {/* hero content */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className='w-full rounded' src={heroImage} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImage2} alt="" className='w-full mb-[30px]' />
                <img src={heroImage3} alt="" className='w-full' />
              </div>
            </div>

          </div>
        </div>

      </section>

      <section >
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Providing the best medical services
            </h2>
            <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illo, error. Iure facilis sapiente repudiandae mollitia 
              voluptas, illum adipisci neque tempora.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img className='w-[100px]' src={icon01} alt=""/>
              </div>
              <div className='mt-[30px]'>
                <p className='text-center text-[26px] leading-9 text-headingColor font-[700]'>information of patients </p>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum ut velit, facere, 
                  consectetur quibusdam delectus voluptas officia repellat atque ipsam placeat corporis ratione cumque?</p>
              <Link to="doctors" className='transition duration-700 ease-in-out w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5 "/>
              </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img className='w-[100px]' src={icon02} alt=""/>
              </div>
              <div className='mt-[30px]'>
                <p className='text-center text-[26px] leading-9 text-headingColor font-[700]'>Find the best doctor  </p>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum ut velit, facere, 
                  consectetur quibusdam delectus voluptas officia repellat atque ipsam placeat corporis ratione cumque?</p>
              <Link to="doctors" className='transition duration-700 ease-in-out w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5 "/>
              </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img className='w-[100px]' src={icon03} alt=""/>
              </div>
              <div className='mt-[30px]'>
                <p className='text-center text-[26px] leading-9 text-headingColor font-[700]'>Choose the right medication</p>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum ut velit, facere, 
                  consectetur quibusdam delectus voluptas officia repellat atque ipsam placeat corporis ratione cumque?</p>
              <Link to="doctors" className='transition duration-700 ease-in-out w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5 "/>
              </Link>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* start about section  */}
      <About/>
      {/* end about section  */}

      {/* start Services section  */}

            <section>
              <div className="container">
                {/* <div className="xl:w-[470px] mx-auto">
                  <h2 className="heading text-center">
                    Our medical services
                  </h2>
                  <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Illo, error. Iure facilis sapiente repudiandae mollitia 
                  voluptas, illum adipisci neque tempora.</p>
                </div> */}
            <Services/>
              </div>
            </section>
      {/* end Services section  */}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br/> anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. view our physicians who are accepting new patients, use the 
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/" ><button className='btn'>Learn More</button></Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="" className="w-3/4 rounded" />
              <div className="w-[150px] lg:w-[240px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    Get virtual treatment anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* our great doctor */}
        <section>
          <div className="container">
          {/* <div className="xl:w-[470px] mx-auto">
                  <h2 className="heading text-center">
                    Our Great Doctors
                  </h2>
                  <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Illo, error. Iure facilis sapiente repudiandae mollitia 
                  voluptas, illum adipisci neque tempora.</p>
                </div> */}
                <Doctor/>
          </div>
        </section>


        {/* faq section */}
        <section>
          <div className="container">
          <h2 className="heading text-center mb-[40px]">
                  Most Questions by our beloved patients
                </h2>
            <div className="flex justify-between gap-[50px] lg:gap-0">
              <div className="w-1/2 hidden md:block">
                <img className='rounded' src={faqSection} alt="" />
              </div>
              <div className="w-full md:w-1/2 p-8">


                
        <div className="flex flex-wrap -m-1.5">
          <div className="w-full p-1.5">
            <a className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200" href="#">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="font-semibold tracking-tight">How many doctors are there in this hospital?</h3>
                </div>
                <div className="w-auto p-2">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#171A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
              <p className="hidden mt-6 tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </a>
          </div>
          <div className="w-full p-1.5">
            <a className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200" href="#">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="font-semibold tracking-tight">Can you describe Newleaf in just one sentence?</h3>
                </div>
                <div className="w-auto p-2">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#171A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
              <p className="hidden mt-6 tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </a>
          </div>
          <div className="w-full p-1.5">
            <a className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200" href="#">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="font-semibold tracking-tight">Can I use this template for my client?</h3>
                </div>
                <div className="w-auto p-2">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#171A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
              <p className="hidden mt-6 tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </a>
          </div>
          <div className="w-full p-1.5">
            <a className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200" href="#">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="font-semibold tracking-tight">Do you offer templates in other categories?</h3>
                </div>
                <div className="w-auto p-2">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#171A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
              <p className="hidden mt-6 tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </a>
          </div>
          <div className="w-full p-1.5">
            <a className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200" href="#">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="font-semibold tracking-tight">Do I need to credit you when I use this template?</h3>
                </div>
                <div className="w-auto p-2">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#171A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
              <p className="hidden mt-6 tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </a>
          </div>
        </div>
      </div>
            </div>
          </div>
        </section>


        {/* testimonial section */}
  <section className="bg-white dark:bg-white-900">
    <div className=" mx-auto max-w-screen-xl text-center ">
      <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
          <p className="text__para mb-5">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div> 
      <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-white-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                  <p className="text__para my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                  <p className="my-4 text__para">Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                  <p className="my-4 text__para">If you care for your time, I hands down would go with this."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Bonnie Green</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white-50 border-b border-gray-200 md:p-12 dark:bg-white-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                  <p className="my-4 text__para">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
                  <p className="my-4 text__para">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Roberta Casas</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-white-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                  <p className="my-4 text__para">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>
                  <p className="my-4 text__para">Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</p>
                  <p className="my-4 text__para">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Jese Leos</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white-50 border-gray-200 md:p-12 dark:bg-white-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                  <p className="my-4 text__para">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
                  <p className="my-4 text__para">You have many examples that can be used to create a fast prototype for your team."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Joseph McFall</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                  </div>
              </figcaption>    
          </figure>
      </div>
      <div className="text-center">
          <a  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-white-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a> 
      </div>
      </div>
</section>

  <section>
    <div className="container">
    {/* <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Contact us
            </h2>
            <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illo, error. Iure facilis sapiente repudiandae mollitia 
              voluptas, illum adipisci neque tempora.</p>
          </div> */}
          <Contact/>
    </div>
  </section>

    </>
  )
}

export default Home
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import notFound from '../assets/404.png'



const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div>
    <Navbar/>
      <div className='w-full py-[18vh] relative flex flex-col justify-center items-center'>
      {/* <div className='text-[20rem] text-[#2c9fe6] font-extrabold '>404</div> */}
      <img src={notFound} alt="404" className='w-[35rem] h-auto ' />
      <p className='text-[2rem] text-[#2c9fe6] font-extrabold mt-5' >Page Not Found</p>
      <button onClick={() => {navigate("/") }} className='bg-[#2c9fe6] hover:bg-[#2276aa] text-white text-lg font-bold rounded-md px-4 py-2 mt-5' >Go Back to Home</button>
      </div>
      <Footer/>
    </div>
  )
}

export default NotFound
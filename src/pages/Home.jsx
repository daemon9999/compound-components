import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <section className='bg-brand h-full flex items-center justify-center flex-col gap-y-10 '>
        <h1 className=' text-text-1 text-6xl font-black tracking-widest'>HEADLESS UI DEMO</h1> 

       <Link to={'/components'} className='bg-main flex items-center justify-center  text-text-2 px-10 py-5 rounded-xl w-[250px] text-3xl hover:w-1/2 font-semibold hover:bg-text-2 hover:text-main transition-all duration-500'>Start</Link>

    </section>
  )
}

export default Home
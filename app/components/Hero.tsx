"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Montserrat } from 'next/font/google';

const Mont = Montserrat({
  subsets: ["latin"],
  weight: ["900"]
})

const Hero = () => {
  const Router = useRouter();

  const handleNavigation = () => {
    Router.push('/Products'); 
  };
  return (
   <>
   <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className={`${Mont.className} title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900`}>Timeless Elegance at Your Fingertips
        
      </h1>
      <p className="mb-8 leading-relaxed">Discover a curated collection of premium watches crafted for style, precision, and sophistication. Whether you're looking for a classic timepiece or a modern statement, our selection ensures you'll always make every moment count.</p>
      <div className="flex justify-center">
        <button onClick={handleNavigation} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Products</button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  </div>
</section>
   </>
  )
}

export default Hero
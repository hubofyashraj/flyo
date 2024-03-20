'use client'
import Image from "next/image";
import Navbar from "./nav";
import { images } from "./images";
import { url } from "inspector";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(767);
  const [email, setEmail] = useState('');
  useEffect(()=>{
    function handleResize() {
      setWidth(window.innerWidth)
      
    }
    window.addEventListener('resize', handleResize);
    handleResize()
  })

  function check() {
    if(email=='') {
      alert('Empty Email')
    }
  }

  function onChangeHandler(e: ChangeEvent){
  
    setEmail((e.target as HTMLInputElement).value)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  transition-all duration-1000">
      <Navbar />
      
      <div className=" mt-20 mx-6 flex flex-col md:flex-row-reverse gap-16 ">
        <div className="w-full h-1/2 md:w-1/2 md:h-full">
          <Image className="" src={images.illustration1} alt="illustration1" />
        </div>
        <div className="grow w-full h-1/2 md:w-1/2 md:h-auto flex flex-col justify-center  ">
          <h1 className="text-2xl font-bold text-center md:text-left md:leading-normal">All your files in one secure location, accessible anywhere.</h1>
          <p className="text-base mx-2 font-sans text-center md:text-left mt-8  md:mx-0 md:my-3">Fylo stores your most important files in one secure location. them wherever you need, share and collaborate with friends, family, and co-workers.</p>
          <div className="">
            <form className="w-full flex flex-col md:flex-row gap-5 mx-2 my-8 md:m-0">
              <input onChange={onChangeHandler} id="email" className="grow h-12 px-5 border border-black rounded text-sm" placeholder="Enter your email..." type="email"  />
              <button type="submit" onClick={check} className="bg-blue-500 shrink-0 h-12 md:w-40 border rounded text-sm">Get Started</button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full mt-20">
        <Image width={0} height={0} className="w-full"  src={width<500?images.bg_curve_mobile.src:images.bg_curve_desktop.src} alt=""/>
      </div>
      <div style={{backgroundColor: '#F8F8FE'}} className="p-4  bg-no-repeat bg-top flex flex-col md:flex-row-reverse gap-16 ">
        <div className="w-full h-1/2 md:w-1/2 md:h-full">
          <Image className="" src={images.illustration2} alt="illustration1" />
        </div>
        <div className="grow w-full h-1/2 md:w-1/2 md:h-auto md:pl-16 flex flex-col  justify-center md:items-start ">
          <h1 className="text-base md:text-3xl my-3 font-bold text-center md:text-left md:leading-normal">Stay productive, wherever you are</h1>
          <div className=" flex flex-col justify-center  md:w-4/5 ">
            <p className="text-sm  my-3 md:mx-0 md:my-3">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p className="text-sm  my-3 md:mx-0 md:my-3">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
            <div style={{borderColor: '#3DA08F', color: '#3DA08F'}} className="flex self-center md:self-start font-bold justify-center gap-2 max-w-fit md:max-w-full  mt-6 md:m-0 border-b-2 ">
              <a href="#" className="text-center md:text-left text-xs md:text-base">See how Fylo works</a>
              <Image className=" w-5 h-5" height={0} width={0} src={images.icon_arrow.src} alt="arow"/>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Card />
          </div>
        </div>
        
      </div>
      <div style={{backgroundColor: '#585989'}} className="w-full flex flex-col md:flex-row gap-5 justify-center items-center p-16 md:px-0 text-white">
        <div className="flex-1 flex flex-col gap-5 px-16">
          <p className="text-lg md:text-3xl text-center md:text-left font-bold">Get early access today</p>
          <p className="text-sm text-center md:text-left">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        </div>
        <div className="flex-1 md:w-full  px-16">
          <form onSubmit={()=>{}} className="flex flex-col text-xs w-[calc(13rem)] md:w-full md:justify-center pl-20  gap-2">
            <input className="px-4 py-2 text-black outline-none rounded md:max-w-96" type="text" placeholder="email@example.com"/>
            <input className="bg-blue-600 py-2 md:max-w-48 outline-none rounded" type="submit" value={'Get started for free'}/>
          </form>
        </div>
      </div>
      <div style={{backgroundColor: '#070439'}} className=" w-full p-12 flex flex-col text-lg">
        <div>
          <Image className="text-white" src={images.logo_white} alt=""/>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between text-sm md:mr-60">
          <div>
            <div className="flex gap-5 text-white mt-12">
              <Image  className="h-4" src={images.icon_phone} alt=""/>
              <a href="tel:+1-543-123-4567">Phone: +1-543-123-4567</a>
            </div>
            <div className="flex gap-5 text-white mt-4">
              <Image className="h-4" src={images.icon_email} alt=""/>
              <a href="mailto:example@fylo.com">example@fylo.com</a>
            </div>
          </div>
          
          <div>
            <div className="text-white mt-12">
              <a href="#">About Us</a>
            </div>
            <div className="text-white mt-4">
              <a href="#">Jobs</a>
            </div>
            <div className="text-white mt-4">
              <a href="#">Press</a>
            </div>
            <div className="text-white mt-4">
              <a href="#">Blog</a>
            </div>
          </div>
          <div>
            <div className="text-white mt-12">
              <a href="#">Contact Us</a>
            </div>
            <div className="text-white mt-4">
              <a href="#">Terms</a>
            </div>
            <div className="text-white mt-4">
              <a href="#">Privacy</a>
            </div>
          </div>

        </div>
      </div>

      <div>

      </div>
      

      

      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Yashraj</a>.
        </p>
      </footer>
    </main>
  );
}


function Card() {
  return (
    <div className="p-8 max-w-96 scale-75 md:scale-100 bg-white drop-shadow-md ">
      <div><Image src={images.icon_quotes} alt=""/></div>
      <div className="py-4">
        <p className="text-sm w-full">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
      </div>
      <div className="flex gap-3 justify-start items-center">
        <div className="rounded-full overflow-hidden w-10 h-10"><Image src={images.avatar} alt=""/></div>
        <div className="">
          <p className="text-sm font-bold">Kyle Burden</p>
          <p className="text-xs ">Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  )
}
import React, { useState,useRef, useEffect } from 'react'
import Navbar from './componets/navbar'
import Hero from './componets/Hero'
import TrustedBy from './componets/TrustedBy'
import Services from './componets/Services'
import OurWork from './componets/OurWork'
import Teams from './componets/Teams'
import ContactUs from './componets/ContactUs'
import Footer from './componets/Footer';
const App = () => {
  const [theme,setTheme]=useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  
  const dotRef=useRef(null)
  const outlineRef=useRef(null)
  
  //Refs for custom cursor position tracking
  const mouse=useRef({x:0,y:0})
  const position=useRef({x:0,y:0})
  useEffect(()=>{
    const handleMouseMove=(e)=>{
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
     document.addEventListener('mousemove',handleMouseMove)
     const animate=()=>{
        position.current.x+=(mouse.current.x - position.current.x) *0.1
        position.current.y+=(mouse.current.y - position.current.y) *0.1
        
        if(dotRef.current && outlineRef.current){
           dotRef.current.style.transform=`translate3d(${mouse.current.x -6}px, ${mouse.current.y-6}px,0)`
           outlineRef.current.style.transform=`translate3d(${mouse.current.x -20}px, ${mouse.current.y-20}px,0)`
        }
        requestAnimationFrame(animate)
      }
        animate()
        return ()=>{
          document.addEventListener('mousemove',handleMouseMove)
        }
    },[])
  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero></Hero>
      <TrustedBy></TrustedBy>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme}/>
       
       {/* Custom Cursor ring */}
       <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full
        border border-primary pointer-events-none z-[999]' style={{transition:'transform 0.1s'}}></div>
   
        {/* Custom Cursor dot */}
        <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full
        border bg-primary pointer-events-none z-[999]'></div>
   
    </div>
  )
}

export default App

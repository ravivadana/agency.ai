import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"
const ContactUs = () => {
  const onSubmit = async(event)  =>{
    event.preventDefault();
  }
  return (
    <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Reach out to us' desc='from strategy to execution, we craft 
        digital solution that move your business forward.'/>
       
       <motion.form
           initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:0.4}}
            viewport={{ once: true }}
         onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm-gap-5 max-w-2xl w-full'>
        <div>
           <p className='mb-2 text-sm font-mediaum'>Your name</p>
           <div className='flex   pl-3 rounded-lg border border-gray-300
           dark:border-gray-600'>
              <img src={assets.person_icon} alt=''></img>
              <input type='text' name='name' placeholder='Enter your name' className='w-full p-3 text-sm outline-noe' required/>
                
           </div>
        </div>
        <div>
           <p className='mb-2 text-sm font-mediaum'>Email</p>
           <div className='flex   pl-3 rounded-lg border border-gray-300
           dark:border-gray-600'>
              <img src={assets.email_icon} alt=''></img>
              <input type='email' name='email' placeholder='Enter your email' className='w-full p-3 text-sm outline-noe' required/>
                
           </div>
        </div>
        <div className='sm:col-span-2'>
           <p className='mb-2 text-sm font-mediaum'>Message</p>
           <textarea name='message' rows={8} className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300
           dark:border-gray-600' required/>
        </div>
        <button className='w-max flex gap-2 bg-primary text-white
        text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 
        transion-all' type='submit'>Submit
          <img src={assets.arrow_icon} alt='' className='w-4'/>
        </button>
       </motion.form>
      
    </motion.div>
  )
}

export default ContactUs

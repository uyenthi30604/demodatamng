import React from 'react'
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

function Footer() {
  return (
    <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium-2 tracking-wide text-[#c3e956]'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" name="" id="" placeholder='uyenthi30604@gmail.com' readOnly />
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" name="" id="" placeholder='0382911981' readOnly/>
          <button className='btn btn-lg' disabled>Have a nice day</button>
        </motion.form>
      </div>
    </div>
  </section>
  )
}

export default Footer
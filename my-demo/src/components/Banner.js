import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from '../assets/dashboard.png'

function Banner() {
  return (
    <section
      className="min-h-[85vh] lg: min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <h1 className="text-[45px] font-bold leading-[0.8] lg:text-[100px] text-[#C3E956]">
                Data System Management Demo
              </h1>
              
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0 text-[#F4FFFC]'>
            Welcome to my demo Google Sheets project, showcasing basic data organization and process management. This simple example highlights inventory management, purchase requests, and quality control processes. While straightforward, it reflects foundational skills in structuring and presenting data effectively. Explore the project to see how spreadsheet tools can support operational efficiency.
              </motion.p>
          </div>
          {/* img */}
          <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} className='flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' className="shadow-2xl rounded-md scale-95 border-8 border-radius-2 border-transparent"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

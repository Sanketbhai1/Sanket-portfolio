import React from "react";
import {motion  } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";

const About = () => {
  return <section id="about"
   className="flex items-center justify-center flex-col gap-12 my-12">

    {/* title */}
    <div className="w-full flex items-center justify-center py-24">
      <motion.div  
      initial={{opacity:0,width:0}}
      animate={{opacity:1,width:200}}
      exit={{opacity:0,width:0}}
      transition={{delay:0.4}}
      className="flex items-center justify-around w-52">
        <img src={Leaf1} className="w-6 h-auto object-contain " alt="" />
        <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
          About
          </p>
        <img src={Leaf2} className="w-6 h-auto object-contain " alt="" />
      </motion.div>

    </div>

    {/* main content*/}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      {/* image section*/}
      <div className="w-full flex items-center justify-center px-8">
        <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative">
          <img src={about} className="w-full rounded-md h-auto object-contain"
           alt="" />

           <div className="absolute w-full h-full -top-3 -left-2  bg-gradient-to-br from bg-primary to-secondary rounded-md blur [5px] -z-10 "></div>

        </div>

      </div>
      {/*content section*/}
      <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
        <p className="text-texlight text-base tracking-wide text-justify">
          Hello, I'm Sanket Bhausaheb Walunj From pune .i have done my BE from aissms college of engineering pune . i have secured 8.13 CGPA in BE. i have done 10 days national level camp and work as a deparment coordinator for NSS and UBA .
        </p>
        <p className="text-texlight text-base tracking-wide text-justify">
          I have interest in mern stack devlopment .and also in  devops engineering i have done certain projects on it also as a freelancer i have  done  above 5 projects in mern stack as well as wordpress .
        </p>
        <p className="text-texlight text-base tracking-wide text-justify">
          I always participated in social activites in national level event shivanjali . also awarded best project leader in national level event.i am active member of we foundation. 
        </p>
      </div>
      </div>

   </section>
};

export default About;

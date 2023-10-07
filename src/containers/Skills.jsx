import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { SkillCard } from "../components";


const Skills = () => {
  return <section id="skills"
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
         Skills
         </p>
       <img src={Leaf2 } className="w-6 h-auto object-contain " alt="" />
     </motion.div>

   </div>

   {/* main content*/}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
   
     {/*content section*/}
     <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
     <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
         My Skills & Work Experience 
         </p>
       <p className="text-texlight text-base tracking-wide text-justify">
        

        I am a Full Stack Developer with one years experience in software development and proficiency in development tools. I love to build products that solves or attempts to solve real life problems. I am a strong believer in teamwork and community building and i have volunteered as a mentor in programs such as  Andela Learning Community and many others.
        I have experience in Frontend (HTML, CSS, Javascript, React), Backend(Node.Js, PHP), mobile (Android java), Databases(MongoDb, MySQL) and UI/UX designs (Figma)

        I love designs and it's the first step before creating any website as I can give layout to my imagination.
       </p>
       <p className="text-texlight text-base tracking-wide text-justify">
        I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.
       </p>
       <p className="text-texlight text-base tracking-wide text-justify">
        I love solving problems whether programming problems or real life problems.

       </p>
     </div>

       {/* image section*/}
       <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
       <SkillCard  skill={"HTML 5"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
       <SkillCard  skill={"CSS 3"} percentage={"75%"} color={"#008FFF"} />
       <SkillCard  skill={"Javascript"} percentage={"85%"} color={"#FFB900"} move={true}/>
       <SkillCard  skill={"Node Js"} percentage={"80%"} color={"#14DB00"} />
       <SkillCard  skill={"React & NextJs"} percentage={"82%"} color={"#00FFF3"} move={true}/>
       <SkillCard  skill={"Mongo DB & Firebase"} percentage={"75%"} color={"#FFE400"} />


     </div>
     </div>

  </section>
};

export default Skills;

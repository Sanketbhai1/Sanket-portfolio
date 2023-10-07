import React from "react";
import { About, Contact, Header, Home, ParticlesContainer, Projects, ServiceCount, Skills }  from "./";
import { Socials } from "../utils/helper";
import {  HomeSocialLinks } from "../components";
import { AnimatePresence } from "framer-motion";



const App = () => {
  return (
    <div className="w-full xl:w[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      

      {/*particles container*/}
        <ParticlesContainer />
        {/*header*/}
        <Header/>

          {/*home container*/}
           <Home/>

           {/*services count cards*/}
           <ServiceCount/>

            {/*about container*/}
             <About/>
              {/*skills container*/}
               <Skills/>

                {/*projects container*/}
                 <Projects/>

                  {/*contact container*/}
                   <Contact />
                    {/*footer container*/}
                    <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
                      <p className="text-3xl tracking-wide text-texlight">Sanket Walunj</p>
                      <div className="flex items-center justify-center gap-16 mt-16">
                      <AnimatePresence>
                         {Socials && Socials.map((item,index) =>(
                          <HomeSocialLinks key={index} data={item} index={index} /> 
                        ))}
                           </AnimatePresence>
                      </div>
                      <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
                        <p className="text-texlight text-center">
                          
                           Contact me
                           I am interested in freelance opportunities especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.
                        </p>
                        <p className="text-texlight text-center">
                          Living,learning,&leveling up one day at a time.
                        </p>
                        <div className="w-full flex flex-col items-center justify-center gap-3">
                          <p className="text-texlight text-center">
                            wsnagarkar90@gmail.com 
                          </p>
                          <p className="text-texlight text-center">+91 9307639841</p>
                          <a href="https://drive.google.com/file/d/1nCFVyNUJMoqvUV_pIyZfFI9HOjt0bAJq/view?usp=sharing">
                            <p className="text-primary text-center">Hire Me</p>
                          </a>
                        </div>
                      </div>
                    </div>
    </div>
  );
};

export default App;

import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return (
   <div className="w-full py-6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-8 ">
    <ServiceCard count={"10k"} text={"Happy Students"}/>
    <ServiceCard count={"7+"} text={"Happy customers"}/>
    <ServiceCard count={"8+"} text={"Full-Stack Projects"}/>
    <ServiceCard count={"15+"} text={"Public Project"}/>
    </div>
  );
};

export default ServiceCount;

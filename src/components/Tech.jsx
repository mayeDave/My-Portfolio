import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      <h2 className='text-3xl sm:text-4xl font-bold text-gray-100 dark:text-white mb-8 text-center'>
        Tech Stack
      </h2>

      <div className='flex flex-row flex-wrap justify-center gap-6'>
      {technologies.map((tech) => (
        <div key={tech.name} className='flex flex-col items-center group'>
          <div className='w-20 h-20 p-2 rounded-xl bg-blue-100 shadow-md hover:scale-105 transition-transform duration-300'>
            <img
              src={tech.icon}
              alt={tech.name}
              className='w-full h-full object-contain'
            />
          </div>
          <p className='mt-2 text-sm text-center text-gray-100 group-hover:text-blue-300 transition duration-200'>
            {tech.name}
          </p>
        </div>
      ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");

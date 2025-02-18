import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPhp, FaLaravel, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
          <div className='w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>Skills</p>
              <p className='py-4 text-xl text-gray-400 text-center'>
                I enjoy diving into and learning new things. Here's a list of technologies I've worked with:
              </p>
          </div> 

          {/* Skills grid - 1 column on mobile, 2 on medium, 4 on large screens */}
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800/50 py-6 px-4 rounded-lg'>
                  <FaHtml5 size={40} className="mx-auto text-orange-500" />
                  <p className='mt-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800/50 py-6 px-4 rounded-lg'>
                  <FaCss3Alt size={40} className="mx-auto text-blue-500" />
                  <p className='mt-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800/50 py-6 px-4 rounded-lg'>
                  <FaJsSquare size={40} className="mx-auto text-yellow-500" />
                  <p className='mt-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800/50 py-6 px-4 rounded-lg'>
                  <FaReact size={40} className="mx-auto text-cyan-400" />
                  <p className='mt-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800/50 py-6 px-4 rounded-lg'>
                  <FaNodeJs size={40} className="mx-auto text-green-500" />
                  <p className='mt-4'>Node.js</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800/50 py-6 px-4 rounded-lg'>
                  <FaPhp size={40} className="mx-auto text-indigo-500" />
                  <p className='mt-4'>PHP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800/50 py-6 px-4 rounded-lg'>
                  <FaLaravel size={40} className="mx-auto text-red-500" />
                  <p className='mt-4'>Laravel</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800/50 py-6 px-4 rounded-lg'>
                  <FaDatabase size={40} className="mx-auto text-gray-400" />
                  <p className='mt-4'>SQL / NoSQL</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;

// About.jsx
import React from "react";

const About = () => {
  return (
    // Main container with full width/height and background
    <div name="about" id="about" className="w-full min-h-screen text-gray-300">
      {/* Content container with cyan background */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Title section using grid */}
        <div className="py-12 px-6 rounded-md bg-slate-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          {/* Content section with responsive grid */}
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi, I'm a Full-Stack Developer | PHP (Laravel) → React & Node.js | Passion for Scalable Web Apps.
              </p>
            </div>
            <div>
              <p>
                I am a dedicated Full-Stack Developer with a strong background in PHP (Symfony & Laravel) and a growing expertise in JavaScript, React, and Node.js.  
                With a keen eye for clean code and scalable architectures, I enjoy building high-performing web applications that deliver seamless user experiences.
              </p>
              <p className="mt-3">
                Currently, I am expanding my skill set to include modern JavaScript frameworks and back-end technologies, focusing on React for dynamic front-end interfaces and Node.js for scalable APIs.  
                My goal is to stay at the forefront of web development trends and contribute to innovative projects that push the boundaries of digital experiences.
              </p>
              <ul className="list-disc mt-4 ml-5 space-y-2">
                <li><strong>Skills:</strong> PHP (Symfony, Laravel), JavaScript (ES6+), React, Node.js, REST APIs, SQL & NoSQL Databases</li>
                <li><strong>Looking for:</strong> Remote opportunities in modern full-stack development</li>
                <li><strong>Passionate about:</strong> Writing maintainable code, problem-solving, and continuous learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

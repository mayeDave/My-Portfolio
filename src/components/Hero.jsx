import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaWhatsapp, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#0f0f1b] text-white flex flex-col lg:flex-row items-center justify-around gap-10 px-6 lg:px-20 py-28 md:py-16 relative overflow-hidden">
      {/* Left Section */}
      <div className="text-center lg:text-left z-10">
        <motion.h1
          className="text-[clamp(1.5rem,4vw,6rem)] font-bold leading-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hey There,<br />
          I&apos;m <span className="text-blue-400">David!</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-3xl text-gray-300 max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          FullStack Developer
          <br />
          I craft beautiful and scalable full-stack applications.
        </motion.p>

        <div className="mt-4 flex gap-4 justify-center lg:justify-start">
          {/* Social Icons */}
          <a href="https://www.linkedin.com/in/david-olorunmaye-315137327" target="_blank" rel="noopener noreferrer" className="bg-blue-600 w-10 h-10 rounded-lg flex justify-center items-center">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://www.github.com/mayeDave" target="_blank" rel="noopener noreferrer" className="bg-black-300 w-10 h-10 rounded-lg flex justify-center items-center">
            <FaGithub size={24} />
          </a>
          <a href="https://wa.me/2349012411554" target="_blank" rel="noopener noreferrer" className="bg-green-600 w-10 h-10 rounded-lg flex justify-center items-center">
            <FaWhatsapp size={24} />
          </a>
          <a href="mailto:olorunmayedavid1234@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 w-10 h-10 rounded-lg flex justify-center items-center">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <motion.div
        className="relative flex items-center justify-center mt-10 lg:mt-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Blobby Background */}
        <div className="absolute w-[280px] sm:w-[340px] h-[340px] bg-blue-200 rounded-full mix-blend-lighten blur-3xl z-0" />

        {/* Profile Image */}
        <img
          src="dav-nobg.png"
          alt="David"
          className="relative z-10 w-[240px] sm:w-[320px] rounded-full shadow-sm object-fit"
        />
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-sm text-white bg-blue-400 px-4 py-2 rounded-full shadow-md">
          Scroll Down ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;

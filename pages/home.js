
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  
  return (
    <main className=" flex flex-col min-h-screen bg-black text-white ">
      
      
      <div className="flex flex-col items-center justify-center gap-20 p-8 mt-24 md:flex-row">
        {/* Profile Image */}
        <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,255,204,0.4)]">
          <Image
            src="/james.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#00ffcc]">Hello, I'm Bishal!</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-md leading-relaxed">
            A passionate software developer who loves building modern web experiences using React, Next.js, and everything JavaScript!
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-40"></div>

      {/* Centered Button */}
      <div className="flex justify-center mb-20">
        <div className="flex items-center gap-14">
          <Link href='/hireme'>
          <button  className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-10 px-10 h-8 w-26 rounded-md transition duration-300">
            Hire Me →
          </button>
          </Link>
          

           <a
    href="/letsmeet"
    className="text-blue-400 hover:underline text-lg"
  >
    Let's Meet 🚀
  </a>
        </div>
      </div>

      <div className="h-14"></div>

      {/* Social Media Icons */}
      <div className="flex gap-17 mb-20 justify-center">
        <a
          href="https://github.com/Bishalpachhai1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-2xl"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/Vishal K.pachhai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 text-2xl"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/Bishalpachhai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 text-2xl"
        >
          <FaTwitter size={24} />
        </a>
      </div>

    </main>
  );
}





     
      
    
  

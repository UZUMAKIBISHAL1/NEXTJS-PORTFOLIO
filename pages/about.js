'use client';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
    <div className="about-container">
      <div className="image-section">
        <Image src='/w.jpg' alt="Profile" layout="fill" objectFit="cover" />
      </div>

      <div className="text-section">
        <h1 className='text-yellow'>Hi, I am Bishal.</h1>
        <p>
           I am a passionate developer who loves crafting clean and modern
          websites. With strong skills in React, Next.js, and UI/UX, and I also 
          have some good experience in backend environment.I have build few 
          Projects using Python's Django and Rest Framework. I turn
          ideas into interactive web experiences. I believe in writing
          maintainable code and building user-friendly products.
        </p>
        <p>
          Currently looking for exciting opportunities to collaborate, grow,
          and build cool stuff. Let 's connect and make something awesome!
          Thanks for visiting my page!
        </p>
        <p>
          I have completed my under Graduation from Sai Global Institute of Technology
          and i am further planning to continue my study in IT sector in kathmandu.
          I love making website and i want to build something that helps our 
          society to go ahead and our nation too.
        </p>
      </div>

      <style jsx>{`
        .about-container {
          display: flex;
          height: calc(95vh - 70px); /* adjust based on your navbar height */
          background-color: black;
          color: white;
        }

        .image-section {
          flex: 1;
          position: relative;
        }

        .text-section {
          flex: 1;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .text-section h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .text-section p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        @media (max-width: 768px) {
          .about-container {
            flex-direction: column;
          }

          .image-section {
            height: 200px;
          }

          .text-section {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
    </main>
  );
}

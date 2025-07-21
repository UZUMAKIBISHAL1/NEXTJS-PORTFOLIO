'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import Navbar from '../components/Navbar';

export default function Contact() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <main>
      <Navbar />
    <div className="container">
      
      <h1 className="title">Contact Me!</h1>
      <p className="subtitle">Feel free to reach out through any of these platforms:</p>

      <div className="social-links">
        <a href="https://www.facebook.com/VishalPachhaiChhetri" target="_blank"> Facebook- Vishal Pachhai Chhetri</a>
        <a href="https://www.linkedin.com/in/VishalK.Chhetri" target="_blank"> LinkedIn- Vishal K.Chhetri</a>
        <a href="https://github.com/uzumakibishal1" target="_blank"> GitHub- uzumakibishal1</a>
        <a href="mailto:bishalpachhai5@@example.com">Email- bishalpachhai5@gmail.com</a>
      </div>

      <button className="back-button" onClick={handleBack}>
        ← Back to Home
      </button>

      <style jsx>{`
        .container {
          background-color: black;
          color: white;
          height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 60px;
        
        }

        .title {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 1.1rem;
          margin-bottom: 50px;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 40px;
        }

        .social-links a {
          color: #00bcd4;
          font-size: 1.2rem;
          text-decoration: none;
        }

        .social-links a:hover {
          color: #fff;
        }

        .back-button {
          background: none;
          color: #aaa;
          border: none;
          font-size: 0.95rem;
          text-decoration: underline;
          cursor: pointer;
        }

        .back-button:hover {
          color: white;
        }
      `}</style>
    </div>
    </main>
  );
}

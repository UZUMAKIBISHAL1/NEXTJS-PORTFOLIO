"use client";
import Image from "next/image";
import React from 'react'
import Navbar from "../components/Navbar";
import Link from 'next/link';




export default function Projects() {

const projects = [
  {
    id: 1,
    image: '/chatimage.jpg',
    title: 'Chat App :',
    description: 'This is the first project.It is actually based on Chatting System Behaviour , Lets not talk and dive into code.A chat app allows users to communicate with each other in real-time through text, voice, or video messages. These apps often include features like one-on-one messaging, group chats, file sharing, and the ability to see the online status of other users.',
    link: 'https://github.com/yourname/project1',
  },
  {
    id: 2,
    image: '/portfolioimage.jpg',
    title: 'Portfolio Site:',
    description: 'This is my second one in which  i will show you the source code of this portfolio site. See the details by visiting my GitHub.A clean and modern portfolio showcasing my web development projects, skills, and experience — built with Next.js and designed for a smooth, responsive user experience.',
    link: 'https://github.com/yourname/project2',
  }, 
  {
    id: 3,
    image: '/lt.jpg',
    title: 'Language Translator:',
    description: 'Tighten your seatbelt cause this pages gives you the full source code of the Language Translator APK build by myself.A simple and fast language translator app that detects and translates text between multiple languages using real-time API integration. Built with a clean UI and supports instant translation, copy, and clear features.',
    link: 'https://github.com/yourname/project2',
  },
   {
    id: 4,
    image: '/musicpic.webp',
    title: 'Music Player:',
    description: '🎵 Music Player — Project Description.I built a responsive and interactive music player web app from scratch, focusing on clean UI, audio control, and smooth user experience. The player allows users to play, pause, skip tracks, seek within a track, and toggle repeat/shuffle modes.',
    link: 'https://github.com/yourname/project2',
  },
];


  return (
    <main>
      <Navbar />
    <div className="container">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project ${index % 2 !== 0 ? 'reverse' : ''}`}
        >
          <div className="imageContainer">
            <Image src={project.image} alt={project.title} width={400} height={250} />
          </div>
          <div className="content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="button">
              View on GitHub
            </a>
          </div>
        </div>
      ))}

      <style jsx>{`
        .container {
          width:98vw;
          background-color: black;
          color: white;
          padding: 60px 20px;
          margin:0px;
        }

        .project {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 80px;
          gap: 40px;
          flex-wrap: wrap;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        .imageContainer {
          flex: 1;
          min-width: 400px;
          border-radius:50%;
        }

        .content {
          flex: 1;
          min-width: 300px;
        }

        h2 {
          font-size: 28px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          margin-bottom: 20px;
          color:white;
        }

        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: white;
          color: black;
          text-decoration: none;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .button:hover {
          background-color: #ccc;
        }
        
      .link {
       color:white;

       }
       .Image{
       border-radius:50%;
       }

     
      `}</style>
    </div>
    </main>
  );
}






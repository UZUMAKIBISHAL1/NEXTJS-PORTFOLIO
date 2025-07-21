/*'use client';
import React from 'react';
import About from '../pages/about';
import Contact from '../pages/contact';
import Projects from '../pages/projects';
import Home from '../pages/home';
import Link from 'next/link';
import '../styles/navbar.module.css';
import { usePathname } from 'next/navigation';
const Navbar = () => {

 const pathname = usePathname();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: '#111',
      boxShadow: '0 2px 10px rgba(255, 255, 255, 0.1)'
    }}>
      <h1 style={{ color: '#00ffcc', fontSize: '2rem' }}>Bishal</h1>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        color: '#'
      }}>

                  <li>
          <Link href="/" replace={true} className={pathname === '/'? 'active' :''} style={{ color:'#', textDecoration:'none'}}>Home</Link>
        </li>
        <li>
          <Link href="/about" replace={true} className={pathname === '/about'? 'active' :''} style={{ color:'#', textDecoration:'none'}}>About</Link>
        </li>
        <li>
          <Link href="/projects" replace={true} className={pathname === '/projects'? 'active' :''} style={{ color:'#', textDecoration:'none'}}>Projects</Link>
        </li>
        <li>
          <Link href="/contact" replace={true} className={pathname === '/contact'? 'active' :''} style={{ color:'#', textDecoration:'none'}}>Contact</Link>
        </li>


      </ul>
    </nav>
  );
};



export default Navbar;
*/

'use client';
import React from 'react';
import About from '../pages/about';
import Contact from '../pages/contact';
import Projects from '../pages/projects';
import Home from '../pages/home';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: '#111',
      boxShadow: '0 2px 10px rgba(255, 255, 255, 0.1)'
    }}>
      <h1 style={{
        color: '#00ffcc',
        fontSize: '2rem'
      }}>Bishal</h1>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        color: '#fff'
      }}>
        <li>
          <Link
            href="/"
            replace={true}
            style={{
              color: pathname === '/' ? 'yellow' : 'white',
              textDecoration: 'none',
              borderBottom: pathname === '/' ? '2px solid yellow' : 'none'
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            replace={true}
            style={{
              color: pathname === '/about' ? 'yellow' : 'white',
              textDecoration: 'none',
              borderBottom: pathname === '/about' ? '2px solid yellow' : 'none'
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            replace={true}
            style={{
              color: pathname === '/projects' ? 'yellow' : 'white',
              textDecoration: 'none',
              borderBottom: pathname === '/projects' ? '2px solid yellow' : 'none'
            }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            replace={true}
            style={{
              color: pathname === '/contact' ? 'yellow' : 'white',
              textDecoration: 'none',
              borderBottom: pathname === '/contact' ? '2px solid yellow' : 'none'
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
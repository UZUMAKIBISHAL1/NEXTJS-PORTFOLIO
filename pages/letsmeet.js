// pages/letsmeet.js

import { useState } from 'react';
import Link from 'next/link'; // You need to import Link from next/link

export default function LetsMeet() {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks we will meet soon!`);
    // You can replace the alert with any action you want to perform on submit
  };

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', color: 'white', position: 'relative' }}>
      {/* Back arrow at top left */}
      <Link href="/" style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        fontSize: '75px',
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none',
        hover:{
          fontSize:'100px',
        }
        
      }}   >
        &#8617;

      </Link>

      <div
        style={{
          backgroundColor: 'black',
          height: '100vh',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '35px',
            width: '320px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '3rem', margin: 0 }}>Let `s Meet </h1>
          <p style={{ fontSize: '1.25rem', margin: 0 }}>
            Welcome to My Site! Connect, collaborate, and Meet
          </p>

          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              padding: '12px 16px',
              fontSize: '1rem',
              borderRadius: '6px',
              border: '1px solid white',
              backgroundColor: '#222',
              color: 'white',
              width: '100%',
              outline: 'none',
            }}
            required
          />

          <button
            type="submit"
            style={{
              padding: '12px 20px',
              fontSize: '1rem',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#0f62fe', // nice blue button
              color: 'white',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
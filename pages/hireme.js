'use client';
import { useRouter } from 'next/navigation';

export default function HireMePage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="container">
      <h1 className="title">Let's build together</h1>
      <p className="subtitle">
        I'm available for full-time work. Let's work together!
      </p>

      <form className="form">
        <input type="text" placeholder=" Company Name" className="input" />
        <input type="email" placeholder="official email" className="input" />
        <textarea placeholder="criteria etc." className="textarea" />
        <button type="submit" className="submitBtn">Submit</button>
      </form>

      {/* 🔙 Return to Home Button */}
      <button className="backBtn" onClick={handleBack}>
        ← Return Home
      </button>

      <style jsx>{`
        .container {
          background-color: black;
          color: white;
          height: 100vh;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 1.1rem;
          margin-bottom: 30px;
          text-align: center;
          max-width: 500px;
        }

        .form {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 400px;
          gap: 30px;
        }

        .input,
        .textarea {
          padding: 12px;
          background-color: #1e1e1e;
          border: 1px solid #444;
          color: white;
          border-radius: 6px;
          font-size: 1rem;
        }

        .textarea {
          height: 120px;
          resize: none;
        }

        .submitBtn {
          padding: 12px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }

        .submitBtn:hover {
          background-color: #005ac1;
        }

        .backBtn {
          margin-top: 20px;
          background: none;
          color: #ccc;
          border: none;
          cursor: pointer;
          text-decoration: underline;
          font-size: 0.95rem;
        }

        .backBtn:hover {
          color: white;
        }
      `}</style>
    </div>
  );
}

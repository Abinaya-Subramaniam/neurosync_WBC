import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';
import ThreeDRobot from './ThreeDRobot';

const Talkmate = () => {
  const navigate = useNavigate();
  const [sensoryMode, setSensoryMode] = useState(false);

  useEffect(() => {
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.4/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    injectScript.onload = () => {
      if (window.botpress) {
        window.botpress.on("webchat:ready", () => {
          window.botpress.open();
        });

        window.botpress.init({
          botId: "5014c851-268b-4c88-ac15-b130d1fbb548",
          clientId: "bb484039-ccdb-4a11-8693-1aadc16297aa",
          selector: "#webchat",
          configuration: {
            composerPlaceholder: "Hey.. Let's talk and learn. Just say Hi..",
            botName: "Talkmate",
            botAvatar: "https://files.bpcontent.cloud/2025/04/27/08/20250427081918-BYQBJS80.jpeg",
            color: "#D8B4F8",
            variant: "solid",
            themeMode: "light",
            fontFamily: "rubik",
            radius: 3,
            additionalStylesheetUrl: "https://files.bpcontent.cloud/2025/04/27/09/20250427093104-3GOZMJB0.css",
            allowFileUpload: true,
            layout: "embedded", 
            showConversationsButton: false, 
            enableReset: false,
            enableTranscriptDownload: false,
            enableConversationDeletion: false, 
          }
        });
      }
    };

    return () => {
      if (injectScript.parentNode) {
        document.body.removeChild(injectScript);
      }
    };
  }, []);

  return (
    <div className="page-wrapper" style={{
      background: 'linear-gradient(135deg, #f3e8ff 0%, #e0c3fc 100%)',
      fontFamily: 'Rubik, Comic Neue, Arial Rounded MT Bold, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      alignItems: 'center'
    }}>
      <Navbar sensoryMode={sensoryMode} />
      
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none'
      }}>
        {[...Array(14)].map((_, i) => (
          <span key={i} style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 2 + 1.5}rem`,
            opacity: 0.10 + Math.random() * 0.18,
            color: ['#A7D3F1', '#D8CFF8', '#FFF4A3', '#C7F2B4', '#FF00FF', '#FFA500'][i % 6],
            filter: 'blur(1.5px)',
            animation: `floatSplash 10s ${Math.random() * 8}s infinite alternate ease-in-out`,
          }}>●</span>
        ))}
        <style>{`
          @keyframes floatSplash {
            0% { transform: translateY(0) scale(1); }
            100% { transform: translateY(-40px) scale(1.1); }
          }
        `}</style>
      </div>
      
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none',
      }}>
        {[...Array(18)].map((_, i) => (
          <span key={i} style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 1.5 + 1.2}rem`,
            opacity: 0.13 + Math.random() * 0.15,
            color: ['#a78bfa', '#fbbf24', '#f472b6', '#10b981'][i % 4],
            filter: 'blur(0.5px)',
            animation: `floatStar 8s ${Math.random() * 6}s infinite alternate ease-in-out`,
          }}>★</span>
        ))}
        <style>{`
          @keyframes floatStar {
            0% { transform: translateY(0) scale(1); }
            100% { transform: translateY(-30px) scale(1.1); }
          }
        `}</style>
      </div>

      <div style={{
        width: '100%',
        maxWidth: 1200,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2.5rem 2rem 1.5rem 2rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <img src="https://files.bpcontent.cloud/2025/04/27/08/20250427081918-BYQBJS80.jpeg" alt="Talkmate" style={{ width: 60, height: 60, borderRadius: '50%', boxShadow: '0 2px 12px #d8b4f8a0', background: '#fff' }} />
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#7c3aed', margin: 0, letterSpacing: 1 }}>Talkmate</h1>
            <div style={{ color: '#6b7280', fontWeight: 500, fontSize: '1.1rem' }}>Your friendly chat buddy</div>
          </div>
        </div>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 24,
        boxShadow: '0 6px 32px rgba(124,58,237,0.10)',
        padding: '2.5rem 2.5rem 2rem 2.5rem',
        margin: '0 0 2.5rem 0',
        maxWidth: 500,
        width: '90%',
        textAlign: 'center',
        position: 'relative',
      }}>
        <h2 style={{ fontSize: '1.7rem', color: '#4f46e5', fontWeight: 700, marginBottom: 12 }}>Welcome, Little Star! ✨</h2>
        <p style={{ color: '#374151', fontSize: '1.15rem', marginBottom: 0 }}>
          I'm your talk buddy!<br />Let's explore and learn together.<br />Type or speak to me below!
        </p>
      </div>

      <div style={{ display: 'flex', width: '100%', height: 600 }}>
        <div style={{ flex: 1, height: '100%' }}>
          <div id="webchat" style={{ width: '100%', height: '100%', borderRadius: 24, overflow: 'hidden', backgroundColor: '#fff' }} />
        </div>
        <div style={{ flex: 1, height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center',borderRadius: 24}}>
          <ThreeDRobot />
        </div>
      </div>


      <div style={{
        width: '100%',
        textAlign: 'center',
        color: '#a78bfa',
        fontWeight: 600,
        fontSize: '1.1rem',
        letterSpacing: 0.5,
        marginBottom: 18,
        marginTop: 40,
      }}>
        <span role="img" aria-label="sparkle">✨</span> Talk, ask, and have fun! <span role="img" aria-label="sparkle">✨</span>
      </div>

      <style>{`
        #webchat, #webchat .bpWebchat, #webchat .bpw-root {
          position: unset !important;
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          border-radius: 24px !important;
          box-shadow: none !important;
          background: transparent !important;
          font-size: 1.25rem !important;
        }
        #webchat .bpw-message-content, #webchat .bpw-composer {
          font-size: 1.15rem !important;
        }
        #webchat .bpFab, #webchat .bpw-floating-button, #webchat .bpw-header__close {
          display: none !important;
        }
        #webchat .bpw-floating-container {
          display: none !important;
        }
        #webchat {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
      `}</style>
    </div>
  );
};

export default Talkmate;
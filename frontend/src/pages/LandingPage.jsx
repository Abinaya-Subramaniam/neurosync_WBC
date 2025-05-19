import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isWaving, setIsWaving] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [starsCollected, setStarsCollected] = useState(0);
  const [sensoryMode, setSensoryMode] = useState(false);
  const [superpowerRevealed, setSuperpowerRevealed] = useState(false);
  const [handprints, setHandprints] = useState([]);  const [mufasaPosition, setMufasaPosition] = useState('right'); // 'right' or 'left'
  const [isCelebrating, setIsCelebrating] = useState(false);
  
  const messages = [
    "Hello, explorer! Ready for an adventure?",
    "Your uniqueness makes you special!",
    "Every small step is a big victory!",
    "I believe in you - let's learn together!",
    "Today is going to be amazing!",
    "You're capable of wonderful things!"
  ];

  const featureMessages = {
    social: "Friendship skills are superpowers! Let's practice!",
    face: "Faces are like storybooks - I'll help you read them!",
    talk: "Your voice matters! Let's make it heard!",
    draw: "Art is magic - express yourself with colors!"
  };

  const superpowers = [
    "Courage", "Creativity", "Kindness", 
    "Patience", "Curiosity", "Resilience"
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
      waveAnimation();
    }, 8000);
    
    return () => clearInterval(messageInterval);
  }, []);

  const waveAnimation = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 2000);
  };

  const features = [
    { id: 'social', title: 'SocialSense', emoji: '🤝', color: '#7EB5D6' },
    { id: 'face', title: 'FaceCues', emoji: '😊', color: '#A8D8B9' },
    { id: 'talk', title: 'Talkmate', emoji: '🗣️', color: '#FFD07B' },
    { id: 'draw', title: 'DrawEase', emoji: '🎨', color: '#E6AACE' }
  ];

  const collectStar = () => {
    setStarsCollected(prev => prev + 1);
    waveAnimation();
    setCurrentMessage(5);
    setMufasaMessage("Great job collecting a star! You're shining bright! ✨");
  };

  const revealSuperpower = () => {
    setSuperpowerRevealed(true);
    waveAnimation();
    setTimeout(() => setSuperpowerRevealed(false), 5000);
    setMufasaMessage("Wow! You discovered your superpower! Amazing!");
  };

  const addHandprint = () => {
    const handImages = [
      'https://i.imgur.com/biuU8ab.png', 
      'https://i.imgur.com/6E0T2XD.png',
      'https://i.imgur.com/nqD5uUT.png',
      'https://i.imgur.com/Zh3TOkr.png',
      'https://i.imgur.com/TUhVtYH.png' 
    ];
    const newHand = {
      id: Date.now() + Math.random(),
      src: handImages[Math.floor(Math.random() * handImages.length)],
      x: Math.random() * 80 + 10, 
      y: Math.random() * 60 + 10, 
      rotation: Math.random() * 60 - 30, 
      size: Math.random() * 40 + 60, 
    };
    setHandprints((prev) => [...prev, newHand]);
    setMufasaMessage("High five! You're now part of our wall of champions! ✋");
  };

  const [mufasaMessage, setMufasaMessage] = useState(messages[0]);

  useEffect(() => {
    // Change Mufasa's position periodically
    const positionInterval = setInterval(() => {
      setMufasaPosition(prev => prev === 'right' ? 'left' : 'right');
    }, 15000);
    return () => clearInterval(positionInterval);
  }, []);

  return (
    <div className={`neuro-app ${sensoryMode ? 'sensory-mode' : ''}`}>
      {/* Floating elements - only visible in vibrant mode */}
      {!sensoryMode && (
        <div className="floating-elements">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={`floating-element ${i % 4 === 0 ? 'circle' : i % 4 === 1 ? 'triangle' : i % 4 === 2 ? 'square' : 'star'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                opacity: sensoryMode ? 0.1 : (0.10 + Math.random() * 0.18)
              }}
            />
          ))}
        </div>
      )}

      {/* Sensory Mode Toggle with enhanced styling */}
      <div className="sensory-toggle-container">
        <button 
          className={`sensory-toggle ${sensoryMode ? 'active' : ''}`}
          onClick={() => {
            setSensoryMode(!sensoryMode);
            // Only add mode change message if Mufasa was showing a default message
            if (messages.includes(mufasaMessage)) {
              setMufasaMessage(sensoryMode ? 
                "Welcome to Vibrant Mode! Let's have some colorful fun! 🌈" : 
                "Entering Calm Mode for a peaceful experience 🌙"
              );
            }
          }}
          style={{
            background: sensoryMode ? '#f8f9fa' : 'rgba(255,255,255,0.9)',
            boxShadow: sensoryMode ? 
              '0 2px 8px rgba(0,0,0,0.1)' : 
              '0 4px 15px rgba(124,58,237,0.15)',
            transition: 'all 0.3s ease',
            color: sensoryMode ? '#7c3aed' : '#4a6fa5',
            border: sensoryMode ? '2px solid #e9ecef' : '2px solid rgba(255,255,255,0.2)'
          }}
        >
          <span className="toggle-icon" style={{
            marginRight: '8px',
            fontSize: '1.2rem'
          }}>{sensoryMode ? '🌙' : '☀️'}</span>
          <span style={{
            fontWeight: '600',
            letterSpacing: '0.3px'
          }}>{sensoryMode ? 'Calm Mode' : 'Vibrant Mode'}</span>
        </button>
      </div>

      {/* Main Navigation with enhanced conditional styling */}
      <nav className="main-nav" style={{
        background: sensoryMode ? 
          'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' : 
          'linear-gradient(135deg, #a7d3f1 0%, #d8cff8 100%)',
        boxShadow: sensoryMode ?
          '0 2px 12px rgba(0,0,0,0.03)' :
          '0 4px 20px rgba(124,58,237,0.12)',
        transition: 'all 0.4s ease',
        borderBottom: sensoryMode ? '1px solid #f1f3f5' : 'none'
      }}>        <div className="nav-logo">
          <img src="https://i.imgur.com/1VN0WF9.png" alt="NeuroSync Logo" className="logo-icon" />          <span className="logo-text" style={{
            color: sensoryMode ? '#2D3748' : '#1a365d',
            fontWeight: '800',
            letterSpacing: '0.5px',
            transition: 'all 0.3s ease'
          }}>NeuroSync</span>
        </div>
        <div className="nav-links">
          <Link to="/talk" className="nav-link" style={{
            color: sensoryMode ? '#4a5568' : '#495057',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.9)',
            boxShadow: sensoryMode ? '0 1px 3px rgba(0,0,0,0.05)' : '0 2px 8px rgba(124,58,237,0.08)',
            transition: 'all 0.3s ease'
          }}>🗣️ Talkmate</Link>
          <Link to="/draw" className="nav-link" style={{
            color: sensoryMode ? '#4a5568' : '#495057',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.9)',
            boxShadow: sensoryMode ? '0 1px 3px rgba(0,0,0,0.05)' : '0 2px 8px rgba(124,58,237,0.08)',
            transition: 'all 0.3s ease'
          }}>🎨 DrawEase</Link>
          <Link to="/scenarios" className="nav-link" style={{
            color: sensoryMode ? '#4a5568' : '#495057',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.9)',
            boxShadow: sensoryMode ? '0 1px 3px rgba(0,0,0,0.05)' : '0 2px 8px rgba(124,58,237,0.08)',
            transition: 'all 0.3s ease'
          }}>🤝 SocialSense</Link>
          <span className="nav-link" style={{ 
            opacity: 0.5, 
            cursor: 'not-allowed',
            color: sensoryMode ? '#4a5568' : '#495057',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.9)',
            boxShadow: sensoryMode ? '0 1px 3px rgba(0,0,0,0.05)' : '0 2px 8px rgba(124,58,237,0.08)',
            transition: 'all 0.3s ease'
          }}>😊 FaceCues (Coming Soon)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" style={{
        background: sensoryMode ? 'none' : 'rgba(255,255,255,0.05)'
      }}>
        <div className="hero-content">
          <div className="hero-text">            <h1>
              <span className="gradient-text">Unlock</span> <span className="highlight-text">Your</span><br />
              <span className="gradient-text">Superpowers</span>
            </h1>
            <p className="hero-subtitle">
              A friendly world designed just for you to learn, grow, and shine!
            </p>
            <button className="cta-button">
              Start Your Journey <span className="arrow">→</span>
            </button>
          </div>
          {/* Mufasa and Speech Bubble on the right */}
          <div className="mufasa-hero-wrapper">
            <div className="mufasa-speech-bubble">
              <span className="mufasa-quote">{mufasaMessage}</span>
            </div>
            <div className={`mufasa-hero-img ${isWaving ? 'wave' : ''}`}> 
              <img 
                src="https://i.imgur.com/i1763TQ.png" 
                alt="Mufasa your guide" 
                onClick={() => {
                  waveAnimation();
                  setMufasaMessage("Thanks for saying hello! Ready to explore?");
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <span>Scroll to Explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title" style={{
          color: sensoryMode ? '#495057' : '#4a6fa5',
          transition: 'color 0.3s ease'
        }}>
          <span className="title-decoration">✦</span> Your Learning Tools
        </h2>
        <div className="features-grid">
          {/* Feature cards with conditional styling */}          <Link to="/draw" className="feature-card" style={{ 
            textDecoration: 'none', 
            color: 'inherit',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.93)',
            boxShadow: sensoryMode ? 
              '0 2px 8px rgba(0,0,0,0.05)' : 
              '0 8px 32px rgba(74,111,165,0.10)'
          }}>
            <div className="feature-icon" style={{ backgroundColor: '#A7D3F1' }}>🎨</div>
            <h3>DrawEase</h3>
            <p>Express yourself with creative drawing activities</p>
          </Link>          <Link to="/talk" className="feature-card" style={{ 
            textDecoration: 'none', 
            color: 'inherit',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.93)',
            boxShadow: sensoryMode ? 
              '0 2px 8px rgba(0,0,0,0.05)' : 
              '0 8px 32px rgba(74,111,165,0.10)'
          }}>
            <div className="feature-icon" style={{ backgroundColor: '#D8CFF8' }}>🗣️</div>
            <h3>Talkmate</h3>
            <p>Practice conversations and communication skills</p>
          </Link>          <Link to="/scenarios" className="feature-card" style={{ 
            textDecoration: 'none', 
            color: 'inherit',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.93)',
            boxShadow: sensoryMode ? 
              '0 2px 8px rgba(0,0,0,0.05)' : 
              '0 8px 32px rgba(74,111,165,0.10)'
          }}>
            <div className="feature-icon" style={{ backgroundColor: '#C7F2B4' }}>🤝</div>
            <h3>SocialSense</h3>
            <p>Build friendship skills in a safe space</p>
          </Link>          <div className="feature-card" style={{ 
            opacity: 0.5, 
            cursor: 'not-allowed',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.93)',
            boxShadow: sensoryMode ? 
              '0 2px 8px rgba(0,0,0,0.05)' : 
              '0 8px 32px rgba(74,111,165,0.10)',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div className="feature-icon" style={{ backgroundColor: '#FFF4A3' }}>😊</div>
            <h3>FaceCues</h3>
            <p>Coming soon: Learn to read and express emotions</p>
          </div>
        </div>
      </section>

      <section className="high-five-section">
  <h2>🎉 High Five Wall 🎉</h2>
  <p>Click the button to leave your High Five!</p>
  <button onClick={addHandprint} className="high-five-button">Leave a High Five!</button>
  
  <div className="wall">
    {handprints.map((hand) => (
      <img
        key={hand.id}
        src={hand.src}
        className="handprint-image"
        alt="Handprint"
        style={{
          top: `${hand.y}%`,
          left: `${hand.x}%`,
          transform: `rotate(${hand.rotation}deg)`,
          width: `${hand.size}px`,
          height: `${hand.size}px`,
          position: 'absolute',
        }}
      />
    ))}
  </div>
</section>

      <section className="champions-section">
  <h2 className="section-title">
    <span className="title-decoration">🌟</span> Champions Who Shine
  </h2>

  <div className="champions-grid">
    {[
      {
        name: "Albert Einstein",
        achievement: "He loved asking big questions about space and stars. His ideas helped us understand how the world works!",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
        color: "#68BDF7", 
        emoji: "🔭"
      },
      {
        name: "Temple Grandin",
        achievement: "She found smart ways to help animals feel happy and safe, using her kind heart and clever thinking.",
        img: "https://i.imgur.com/SomBTMM.jpeg",
        color: "#7EEC4F", 
        emoji: "🐄"
      },
      {
        name: "Mozart",
        achievement: "As a kid, he made beautiful music that still makes people smile all around the world.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Wolfgang-amadeus-mozart_1.jpg",
        color: "#A58CFF", 
        emoji: "🎵"
      }
    ].map(({ name, achievement, img, color, emoji }) => (
      <div 
        key={name} 
        className="champion-card"
        style={{ '--card-color': color }}
      >
        <div className="card-header">
          <span className="champion-emoji">{emoji}</span>
          <h3 className="champion-name">{name}</h3>
        </div>
        <div className="photo-frame">
          <img src={img} alt={name} className="champion-photo" />
          <div className="photo-glow"></div>
        </div>
        <p className="champion-achievement">{achievement}</p>
        <div className="inspire-button" style={{ backgroundColor: color }}>
          Be Inspired
        </div>
      </div>
    ))}
  </div>

  <div className="next-champion">
    <div className="sparkle">✨</div>
    <p className="next-champion-message">
      You are the next champion! Shine bright and follow your dreams.
    </p>
    <div className="sparkle">✨</div>
  </div>
</section> 


      {/* Daily Challenge */}
      <section className="challenge-section">
        <h2 className="section-title">
          <span className="title-decoration">✦</span> Today's Friendly Challenge
        </h2>
        
        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-badge">🌟</div>
            <h3>Smile at Someone</h3>
          </div>
          <p className="challenge-description">
            Share a friendly smile with a family member, friend, or even Mufasa!
          </p>          <div className="challenge-meter">
            <div className="meter-progress" style={{ width: '40%' }}></div>
          </div>
          <button 
            className={`challenge-button ${isCelebrating ? 'celebrating' : ''}`}
            onClick={() => {
              setIsCelebrating(true);
              setMufasaMessage("Fantastic job! You're making the world a brighter place! 🌟");
              // Play celebration sound
              new Audio('/sounds/success.mp3').play().catch(() => {});
              // Reset celebration after 5 seconds
              setTimeout(() => setIsCelebrating(false), 5000);
            }}
          >
            I Did It! <span className="confetti">🎊</span>
          </button>
          {isCelebrating && (
            <div className="celebration-overlay">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="celebration-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    backgroundColor: ['#FFD700', '#FF69B4', '#4a90e2', '#98FB98'][Math.floor(Math.random() * 4)]
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">🧠</span>
            <span className="logo-text">NeuroSync</span>
          </div>
          <p className="footer-message">
            Created with care for amazing neurodiverse learners
          </p>
          <div className="footer-buttons">
            <button className="footer-button" onClick={collectStar}>
              Get Another Star ⭐
            </button>
            <button 
              className="footer-button" 
              onClick={() => {
                setCurrentMessage(0);
                waveAnimation();
              }}
            >
              Say Hello Again 👋
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;



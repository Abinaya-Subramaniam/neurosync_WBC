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
  const [handprints, setHandprints] = useState([]);
  const [mufasaPosition, setMufasaPosition] = useState('right'); // 'right' or 'left'
  
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
      <div className="floating-elements">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={`floating-element ${i % 4 === 0 ? 'circle' : i % 4 === 1 ? 'triangle' : i % 4 === 2 ? 'square' : 'star'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Sensory Mode Toggle */}
      <div className="sensory-toggle-container">
        <button 
          className={`sensory-toggle ${sensoryMode ? 'active' : ''}`}
          onClick={() => setSensoryMode(!sensoryMode)}
        >
          <span className="toggle-icon">{sensoryMode ? '🌙' : '☀️'}</span>
          {sensoryMode ? 'Calm Mode' : 'Vibrant Mode'}
        </button>
      </div>


      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-logo">
          <span className="logo-icon">🧠</span>
          <span className="logo-text">NeuroSync</span>
        </div>
        <div className="nav-links">
          <Link to="/talk" className="nav-link">🗣️ Talkmate</Link>
          <Link to="/draw" className="nav-link">🎨 DrawEase</Link>
          <Link to="/scenarios" className="nav-link">🤝 SocialSense</Link>
          <span className="nav-link" style={{ opacity: 0.5, cursor: 'not-allowed' }}>😊 FaceCues (Coming Soon)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="gradient-text">Unlock</span> Your<br />
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
        <h2 className="section-title">
          <span className="title-decoration">✦</span> Your Learning Tools
        </h2>
        <div className="features-grid">
          <Link to="/draw" className="feature-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="feature-icon" style={{ backgroundColor: '#A7D3F1' }}>🎨</div>
            <h3>DrawEase</h3>
            <p>Express yourself with creative drawing activities</p>
          </Link>
          <Link to="/talk" className="feature-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="feature-icon" style={{ backgroundColor: '#D8CFF8' }}>🗣️</div>
            <h3>Talkmate</h3>
            <p>Practice conversations and communication skills</p>
          </Link>
          <Link to="/scenarios" className="feature-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="feature-icon" style={{ backgroundColor: '#C7F2B4' }}>🤝</div>
            <h3>SocialSense</h3>
            <p>Build friendship skills in a safe space</p>
          </Link>
          <div className="feature-card" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
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
        color: "#A7D3F1", 
        emoji: "🔭"
      },
      {
        name: "Temple Grandin",
        achievement: "She found smart ways to help animals feel happy and safe, using her kind heart and clever thinking.",
        img: "https://i.imgur.com/SomBTMM.jpeg",
        color: "#C7F2B4", 
        emoji: "🐄"
      },
      {
        name: "Mozart",
        achievement: "As a kid, he made beautiful music that still makes people smile all around the world.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Wolfgang-amadeus-mozart_1.jpg",
        color: "#D8CFF8", // Soft Lavender
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
          </p>
          <div className="challenge-meter">
            <div className="meter-progress" style={{ width: '40%' }}></div>
          </div>
          <button className="challenge-button">
            I Did It! <span className="confetti">🎊</span>
          </button>
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



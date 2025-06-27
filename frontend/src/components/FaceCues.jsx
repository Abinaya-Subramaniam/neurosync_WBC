import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import ProgressChart from "./ProgressChart";
import Navbar from './Navbar';
import "../App.css";

const emotionMap = {
  happy: "😄",
  sad: "😢",
  angry: "😠",
  surprise: "😲",
  fear: "😨",
  disgust: "😖",
  neutral: "😐",
};

const emotionTips = {
  happy: "Smile with raised cheeks and slightly squinty eyes 😊",
  sad: "Show a frown with downturned lips and soft eyes 😢",
  angry: "Lower your eyebrows and press your lips tightly 😠",
  surprise: "Open your eyes and mouth wide like you're shocked 😲",
  fear: "Stretch your lips and widen your eyes like you're scared 😨",
  disgust: "Wrinkle your nose and raise your upper lip like something smells bad 😖",
  neutral: "Keep a relaxed, calm face with no expression 😐",
};

const FaceCues = () => {
  const webcamRef = useRef(null);
  const [emotion, setEmotion] = useState("");
  const [targetEmotion, setTargetEmotion] = useState("happy");
  const [matched, setMatched] = useState(null);
  const [stars, setStars] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [correctMatches, setCorrectMatches] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const videoConstraints = {
    width: 480,
    height: 360,
    facingMode: "user",
  };

  const getRandomEmotion = () => {
    const emotions = Object.keys(emotionMap);
    const random = emotions[Math.floor(Math.random() * emotions.length)];
    setTargetEmotion(random);
    setMatched(null);
    setEmotion("");
  };

  const capture = async () => {
    if (isLoading) return; // Prevent multiple clicks while loading
    setIsLoading(true); // Set loading to true
    setEmotion(""); // Clear previous emotion
    setMatched(null); // Clear previous match status

    const imageSrc = webcamRef.current.getScreenshot();

    try {
      const response = await fetch("http://localhost:8000/facecues", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageSrc }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAttempts((prev) => prev + 1);

      if (data.result) {
        const detectedEmotion = data.result.toLowerCase();
        setEmotion(detectedEmotion);
        const isMatch = detectedEmotion === targetEmotion;
        setMatched(isMatch);
        if (isMatch) {
          setCorrectMatches((prev) => prev + 1);
          setStars((prev) => prev + 1);
        }
      } else {
        setEmotion("unknown");
        setMatched(false);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setEmotion("backend error");
      setMatched(false);
    } finally {
      setIsLoading(false); // Set loading back to false
    }
  };

  useEffect(() => {
    getRandomEmotion();
  }, []);

  return (
    <div className="page-wrapper" style={{
      background: 'linear-gradient(135deg, #f3e8ff 0%, #e0c3fc 100%)',
      fontFamily: 'Rubik, Comic Neue, Arial Rounded MT Bold, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      alignItems: 'center',
    }}>
      <Navbar />
      {/* Decorative floating elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(10)].map((_, i) => (
          <span key={i} style={{ position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, fontSize: `${Math.random() * 2 + 1.5}rem`, opacity: 0.10 + Math.random() * 0.18, color: ['#A7D3F1', '#D8CFF8', '#FFF4A3', '#C7F2B4', '#FF00FF', '#FFA500'][i % 6], filter: 'blur(1.5px)', animation: `floatSplash 10s ${Math.random() * 8}s infinite alternate ease-in-out` }}>●</span>
        ))}
        <style>{`@keyframes floatSplash { 0% { transform: translateY(0) scale(1); } 100% { transform: translateY(-40px) scale(1.1); } }`}</style>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(12)].map((_, i) => (
          <span key={i} style={{ position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, fontSize: `${Math.random() * 1.5 + 1.2}rem`, opacity: 0.13 + Math.random() * 0.15, color: ['#a78bfa', '#fbbf24', '#f472b6', '#10b981'][i % 4], filter: 'blur(0.5px)', animation: `floatStar 8s ${Math.random() * 6}s infinite alternate ease-in-out` }}>★</span>
        ))}
        <style>{`@keyframes floatStar { 0% { transform: translateY(0) scale(1); } 100% { transform: translateY(-30px) scale(1.1); } }`}</style>
      </div>

      {/* Header */}
      <div style={{ width: '100%', maxWidth: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 2rem 1.5rem 2rem', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/616/616494.png" alt="FaceCues" style={{ width: 60, height: 60, borderRadius: '50%', boxShadow: '0 2px 12px #d8b4f8a0', background: '#fff' }} />
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#7c3aed', margin: 0, letterSpacing: 1 }}>FaceCues</h1>
            <div style={{ color: '#6b7280', fontWeight: 500, fontSize: '1.1rem' }}>Emotion Challenge</div>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div style={{ background: 'rgba(255,255,255,0.93)', borderRadius: 28, boxShadow: '0 8px 32px rgba(124,58,237,0.10)', padding: '2.5rem', margin: '0 0 2.5rem 0', maxWidth: 900, width: '95%', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="layout-row" style={{ display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="emotion-card" style={{ minWidth: 220, maxWidth: 260, background: '#f8fafc', borderRadius: 18, padding: 18, boxShadow: '0 2px 8px #d8b4f120', textAlign: 'center' }}>
            <span className="emoji-big" style={{ fontSize: 64 }}>{emotionMap[targetEmotion]}</span>
            <h2 style={{ fontSize: '1.3rem', color: '#7c3aed', fontWeight: 700 }}>Can you show this face?</h2>
            <p className="emotion-label" style={{ fontWeight: 700, fontSize: '1.1rem', color: '#4f46e5', margin: 0 }}>{targetEmotion.toUpperCase()}</p>
            <p className="emotion-tip" style={{ fontSize: '0.98rem', color: '#6b7280', marginTop: 8 }}>✅ Accepted when: {emotionTips[targetEmotion]}</p>
          </div>
          <Webcam
            audio={false}
            height={360}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={480}
            videoConstraints={videoConstraints}
            className="webcam"
            style={{ borderRadius: 18, boxShadow: '0 2px 12px #a7d3f1a0', background: '#fff', margin: 0 }}
          />
        </div>

        <div className="buttons" style={{ display: 'flex', gap: 18, marginTop: 32 }}>
          <button
            className="btn capture"
            style={{
              background: isLoading ? '#ccc' : '#a78bfa',
              color: '#fff',
              border: 'none',
              borderRadius: 14,
              padding: '0.8rem 1.6rem',
              fontWeight: 700,
              fontSize: '1.1rem',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px #a7d3f120',
              transition: 'background 0.2s',
            }}
            onClick={capture}
            disabled={isLoading}
          >
            {isLoading ? '🤔 Thinking...' : '📸 Capture Face'}
          </button>
          <button
            className="btn try"
            style={{ background: '#fbbf24', color: '#fff', border: 'none', borderRadius: 14, padding: '0.8rem 1.6rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 8px #fbbf2410', transition: 'background 0.2s' }}
            onClick={getRandomEmotion}
            disabled={isLoading}
          >
            🔁 Try Another
          </button>
        </div>

        {matched !== null && (
          <div className={`feedback ${matched ? "success" : "fail"}`} style={{ marginTop: 28, background: matched ? '#d1fae5' : '#fee2e2', color: matched ? '#065f46' : '#991b1b', borderRadius: 14, padding: '1rem 1.5rem', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px #a7d3f120', textAlign: 'center', maxWidth: 400 }}>
            {matched ? "🎉 Yay! You matched the emotion!" : "🧐 Oops! Try again!"}
            <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>
              Detected Emotion: <strong>{emotion}</strong>
            </p>
          </div>
        )}

        <div className="stars" style={{ marginTop: 24, color: '#fbbf24', fontWeight: 700, fontSize: '1.15rem' }}>⭐ Stars Earned: {stars}</div>
        <div className="progress-chart" style={{ marginTop: 18 }}>
          <ProgressChart attempts={attempts} correct={correctMatches} />
        </div>
      </div>

      {/* Fun footer */}
      <div style={{ width: '100%', textAlign: 'center', color: '#a78bfa', fontWeight: 600, fontSize: '1.1rem', letterSpacing: 0.5, marginBottom: 18, zIndex: 2 }}>
        <span role="img" aria-label="sparkle">✨</span> Show your best face! <span role="img" aria-label="sparkle">✨</span>
      </div>
    </div>
  );
};

export default FaceCues;

import React, { useRef, useState, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./DrawingBoard.css";
import Navbar from './Navbar';

export default function DrawingBoard() {
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sensoryMode, setSensoryMode] = useState(false);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(4);
  const [showPopup, setShowPopup] = useState(false);
  const [mufasaMessage, setMufasaMessage] = useState("Draw something and I'll guess what it is!");
  const [showMufasa, setShowMufasa] = useState(true);
  const canvasRef = useRef(null);
  const  navigate = useNavigate();
  //git check

  const colors = [
    "#000000", "#FF0000", "#00FF00", "#0000FF", 
    "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500",
    "#A7D3F1", "#D8CFF8", "#FFF4A3", "#C7F2B4"
  ];

  useEffect(() => {
    const messages = [
      "Try drawing simple shapes first!",
      "I love guessing drawings!",
      "Use different colors to make it fun!",
      "The bigger your drawing, the better I can guess!"
    ];
    const interval = setInterval(() => {
      setMufasaMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    setMufasaMessage("Let me think about this...");
    try {
      const imageData = await canvasRef.current.exportImage("png");
      const res = await axios.post("http://localhost:8000/predict", {
        image: imageData,
      });
      setAiResponse(res.data.response);
      setShowPopup(true);
      setMufasaMessage("Did I guess it right?");
    } catch (err) {
      console.error("Error:", err);
      setAiResponse("Oops! Something went wrong. Try again!");
      setShowPopup(true);
      setMufasaMessage("Oh no! Let's try that again.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearCanvas = () => {
    canvasRef.current.clearCanvas();
    setAiResponse("");
    setShowPopup(false);
    setMufasaMessage("Let's try another drawing!");
  };
  return (    <div className={`drawing-board page-wrapper ${sensoryMode ? 'sensory-mode' : ''}`} style={{
      background: sensoryMode ? 
        'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' : 
        'linear-gradient(135deg, #a7d3f1 0%, #d8cff8 100%)',
      fontFamily: 'Comic Neue, Rubik, Arial Rounded MT Bold, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      alignItems: 'center',
    }}>
      <Navbar sensoryMode={sensoryMode} />
      {/* Decorative floating paint splashes */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0
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

      {/* Header & Back Button */}
      <div style={{
        width: '100%',
        maxWidth: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2.5rem 2rem 1.5rem 2rem',
        zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <img src="https://i.imgur.com/uqAKtQM.png" alt="Mufasa" style={{ width: 60, height: 60, borderRadius: '50%', boxShadow: '0 2px 12px #a7d3f1a0', background: '#fff' }} />
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#4a6fa5', margin: 0, letterSpacing: 1 }}>DrawEase</h1>
            <div style={{ color: '#495057', fontWeight: 500, fontSize: '1.1rem' }}>Magic Drawing Pad</div>          </div>
        </div>
      </div>

      {/* Main Drawing App Card */}
      <div style={{
        background: 'rgba(255,255,255,0.93)',
        borderRadius: 28,
        boxShadow: '0 8px 32px rgba(74,111,165,0.10)',
        padding: '2.5rem 2.5rem 2rem 2.5rem',
        margin: '0 0 2.5rem 0',
        maxWidth: 1200,
        width: '95%',
        zIndex: 2,
        display: 'flex',
        gap: 32,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        {/* Left Toolbar */}
        <div style={{ minWidth: 200, maxWidth: 220, flex: '0 0 220px', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ background: '#f8fafc', borderRadius: 18, padding: 18, boxShadow: '0 2px 8px #a7d3f120' }}>
            <h3 style={{ margin: 0, color: '#4a6fa5', fontWeight: 700 }}>🎨 Colors</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
              {colors.map((c) => (
                <button
                  key={c}
                  style={{
                    width: 28, height: 28, borderRadius: '50%', border: color === c ? '3px solid #4a6fa5' : '2px solid #e9ecef', background: c, cursor: 'pointer', outline: 'none', transition: 'border 0.2s',
                  }}
                  onClick={() => {
                    setColor(c);
                    canvasRef.current.setStrokeColor(c);
                    setMufasaMessage(`Great choice! ${c === "#000000" ? "Black is classic!" : c === "#FF0000" ? "Red is energetic!" : c === "#A7D3F1" ? "I love this soft blue!" : "Nice color!"}`);
                  }}
                  aria-label={`Select ${c} color`}
                />
              ))}
            </div>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 18, padding: 18, boxShadow: '0 2px 8px #a7d3f120' }}>
            <h3 style={{ margin: 0, color: '#4a6fa5', fontWeight: 700 }}>🖌️ Brush Size</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
              <button 
                onClick={() => {
                  setBrushSize(Math.max(2, brushSize - 2));
                  setMufasaMessage(`Brush size: ${brushSize - 2}px`);
                }}
                disabled={brushSize <= 2}
                style={{ fontSize: 18, borderRadius: '50%', border: 'none', background: '#e9ecef', width: 32, height: 32, cursor: brushSize > 2 ? 'pointer' : 'not-allowed' }}
              >➖</button>
              <span style={{ fontWeight: 600 }}>{brushSize}px</span>
              <button 
                onClick={() => {
                  setBrushSize(Math.min(20, brushSize + 2));
                  setMufasaMessage(`Brush size: ${brushSize + 2}px`);
                }}
                disabled={brushSize >= 20}
                style={{ fontSize: 18, borderRadius: '50%', border: 'none', background: '#e9ecef', width: 32, height: 32, cursor: brushSize < 20 ? 'pointer' : 'not-allowed' }}
              >➕</button>
            </div>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 18, padding: 18, boxShadow: '0 2px 8px #a7d3f120', textAlign: 'center' }}>
            <div style={{ marginBottom: 10 }}>
              <img src="https://i.imgur.com/uqAKtQM.png" alt="Mufasa" style={{ width: 54, height: 54, borderRadius: '50%', boxShadow: '0 2px 8px #a7d3f120', background: '#fff', marginBottom: 8, cursor: 'pointer' }} onClick={() => setShowMufasa(!showMufasa)} />
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '10px 14px', fontSize: '1.05rem', color: '#495057', boxShadow: '0 2px 8px #a7d3f110', minHeight: 48 }}>
              {mufasaMessage}
            </div>
          </div>
        </div>
        {/* Drawing Area */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <div style={{ 
            width: '100%', 
            aspectRatio: '1.2/1', 
            background: '#fff', 
            borderRadius: 18, 
            boxShadow: '0 8px 32px 0 rgba(74,111,165,0.18), 0 1.5px 12px 0 rgba(124,58,237,0.10)', // smooth, distinct shadow
            position: 'relative', 
            overflow: 'hidden', 
            minHeight: 320, 
            maxHeight: 424, // 480-56
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <ReactSketchCanvas
              ref={canvasRef}
              width="100%"
              height="100%"
              strokeWidth={brushSize}
              strokeColor={color}
              canvasColor="#FFFFFF"
              style={{ borderRadius: "16px" }}
            />
            {showPopup && (
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(167,211,241,0.85)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, borderRadius: 18,
              }}>
                <div style={{ background: '#fff', borderRadius: 16, padding: '2rem 2.5rem', boxShadow: '0 2px 8px #a7d3f120', textAlign: 'center' }}>
                  <h3 style={{ color: '#4a6fa5', fontWeight: 700, fontSize: '1.3rem' }}>🎨 AI Art Detective Says:</h3>
                  <p style={{ color: '#495057', fontSize: '1.1rem', margin: '1rem 0' }}>{aiResponse}</p>
                  <button 
                    style={{ background: '#4a6fa5', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 22px', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', marginTop: 10 }}
                    onClick={() => setShowPopup(false)}
                  >Close</button>
                </div>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: 18, marginTop: 8 }}>
            <button onClick={clearCanvas} style={{ background: '#e9ecef', color: '#495057', border: 'none', borderRadius: 10, padding: '10px 22px', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 8px #a7d3f110' }}>
              🧹 Clear Canvas
            </button>
            <button
              onClick={handleSubmit}
              style={{ background: '#4a6fa5', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 22px', fontWeight: 600, fontSize: '1.1rem', cursor: isLoading ? 'not-allowed' : 'pointer', boxShadow: '0 2px 8px #a7d3f110', opacity: isLoading ? 0.7 : 1 }}
              disabled={isLoading}
            >
              {isLoading ? "🔮 AI is Thinking..." : "✨ What Did I Draw?"}
            </button>
          </div>
        </div>
        {/* Right Toolbar */}
        <div style={{ minWidth: 220, maxWidth: 260, flex: '0 0 240px', display: 'flex', flexDirection: 'column', gap: 32, textAlign: 'left' }}>
          <div style={{ background: '#f8fafc', borderRadius: 18, padding: 18, boxShadow: '0 2px 8px #a7d3f120', textAlign: 'left' }}>
            <h3 style={{ margin: 0, color: '#4a6fa5', fontWeight: 700, textAlign: 'left' }}>📝 How to Play:</h3>
            <ol style={{ margin: '10px 0 0 18px', color: '#495057', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'left' }}>
              <li>Choose a color from the left</li>
              <li>Adjust brush size if needed</li>
              <li>Draw something on the canvas</li>
              <li>Click "What Did I Draw?"</li>
              <li>See if Mufasa guesses right!</li>
            </ol>
            <p style={{ color: '#7c3aed', fontWeight: 600, marginTop: 10, textAlign: 'left' }}>💡 Tip: Simple shapes work best!</p>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 18, padding: 18, boxShadow: '0 2px 8px #a7d3f120', textAlign: 'left' }}>

          </div>
        </div>
      </div>
      {/* Fun footer */}
      <div style={{
        width: '100%',
        textAlign: 'center',
        color: '#4a6fa5',
        fontWeight: 600,
        fontSize: '1.1rem',
        letterSpacing: 0.5,
        margin: '2rem 0 1rem 0',
        zIndex: 2,
      }}>
        <span role="img" aria-label="sparkle">✨</span> Draw, play, and have fun! <span role="img" aria-label="sparkle">✨</span>
      </div>
    </div>
  );
}
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ sensoryMode }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="main-nav" style={{
      background: sensoryMode ? 
        'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' : 
        'linear-gradient(135deg, #a7d3f1 0%, #d8cff8 100%)',
      boxShadow: sensoryMode ?
        '0 2px 12px rgba(0,0,0,0.03)' :
        '0 4px 20px rgba(124,58,237,0.12)',
      transition: 'all 0.4s ease',
      borderBottom: sensoryMode ? '1px solid #f1f3f5' : 'none'
    }}>
      <Link to="/" className="nav-logo">
        <img src="https://i.imgur.com/1VN0WF9.png" alt="NeuroSync Logo" className="logo-icon" />
        <span className="logo-text" style={{
          color: sensoryMode ? '#2D3748' : '#1a365d',
          fontWeight: '800',
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease'
        }}>NeuroSync</span>
      </Link>
      <div className="nav-links">
        <Link 
          to="/talk" 
          className={`nav-link ${currentPath === '/talk' ? 'active' : ''}`}
          style={{
            color: sensoryMode ? '#4a5568' : '#495057',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.9)',
            boxShadow: sensoryMode ? '0 1px 3px rgba(0,0,0,0.05)' : '0 2px 8px rgba(124,58,237,0.08)',
            transition: 'all 0.3s ease'
          }}
        >
          🗣️ Talkmate
        </Link>
        <Link 
          to="/draw" 
          className={`nav-link ${currentPath === '/draw' ? 'active' : ''}`}
          style={{
            color: sensoryMode ? '#4a5568' : '#495057',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.9)',
            boxShadow: sensoryMode ? '0 1px 3px rgba(0,0,0,0.05)' : '0 2px 8px rgba(124,58,237,0.08)',
            transition: 'all 0.3s ease'
          }}
        >
          🎨 DrawEase
        </Link>
        <Link 
          to="/scenarios" 
          className={`nav-link ${currentPath === '/scenarios' ? 'active' : ''}`}
          style={{
            color: sensoryMode ? '#4a5568' : '#495057',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.9)',
            boxShadow: sensoryMode ? '0 1px 3px rgba(0,0,0,0.05)' : '0 2px 8px rgba(124,58,237,0.08)',
            transition: 'all 0.3s ease'
          }}
        >
          🤝 SocialSense
        </Link>
        <Link 
          to="/facecues" 
          className={`nav-link ${currentPath === '/facecues' ? 'active' : ''}`}
          style={{
            color: sensoryMode ? '#4a5568' : '#495057',
            background: sensoryMode ? '#ffffff' : 'rgba(255,255,255,0.9)',
            boxShadow: sensoryMode ? '0 1px 3px rgba(0,0,0,0.05)' : '0 2px 8px rgba(124,58,237,0.08)',
            transition: 'all 0.3s ease'
          }}
        >
          😊 FaceCues
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
{/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">🧠</span>
            <span className="logo-text" style={{ fontWeight: 'bold' }}>NeuroSync</span>
          </div>
          <p className="footer-message" style={{ fontStyle: 'italic' }}>
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
import React, { useState, useEffect } from 'react';
import FeedbackModal from './FeedbackModal';
import '../styles/Scenario.css';

const Scenario = ({ scenario, onBack }) => {
    const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [sensoryMode, setSensoryMode] = useState(false);
    const [showCompletionBanner, setShowCompletionBanner] = useState(false);
    const [finalScore, setFinalScore] = useState(0);
    const currentPanel = scenario.panels[currentPanelIndex];

    // Sensory sound effects
    const playPositiveSound = () => new Audio('/sounds/positive.mp3').play().catch(() => {});
    const playNeutralSound = () => new Audio('/sounds/neutral.mp3').play().catch(() => {});

    useEffect(() => {
        setSelectedOption(null);
        playNeutralSound();
    }, [currentPanelIndex]);

    const handleOptionSelect = async (optionIndex) => {
        setSelectedOption(optionIndex);
        setLoading(true);
        
        try {
            const response = await fetch(
                `http://localhost:8000/scenarios/${scenario.id}/check-answer`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        panel_index: currentPanelIndex,
                        option_index: optionIndex,
                    }),
                }
            );

            const result = await response.json();
            if (!response.ok) throw new Error(result.detail || 'Failed to check answer');

            setIsCorrect(result.correct);
            setFeedback(result.feedback);
            if (result.correct) {
                setScore(prev => prev + 1);
                playPositiveSound();
            }
        } catch (error) {
            setIsCorrect(false);
            setFeedback(`Error: ${error.message}. Please try again.`);
        } finally {
            setShowFeedback(true);
            setLoading(false);
        }
    };

    const handleNext = () => {
        setShowFeedback(false);
        if (currentPanelIndex < scenario.panels.length - 1) {
            setCurrentPanelIndex(prev => prev + 1);
        } else {
            playPositiveSound();
            setTimeout(() => {
                setFinalScore(score);
                setShowCompletionBanner(true);
            }, 500);
        }
    };

    return (
        <div className={`scenario-container ${sensoryMode ? 'sensory-mode' : ''}`}>
            <div className="scenario-controls">
                <button className="back-button" onClick={onBack}>
                    ← Back to Scenarios
                </button>
                <button 
                    className="sensory-toggle"
                    onClick={() => setSensoryMode(!sensoryMode)}
                >
                    {sensoryMode ? 'Normal Mode' : 'Sensory Mode'}
                </button>
            </div>

            <div className="progress-visual">
                {Array.from({ length: scenario.panels.length }).map((_, i) => (
                    <div 
                        key={i}
                        className={`progress-step ${i <= currentPanelIndex ? 'completed' : ''}`}
                        onClick={() => i <= currentPanelIndex && setCurrentPanelIndex(i)}
                    >
                        {i < currentPanelIndex ? '✓' : i === currentPanelIndex ? '●' : ''}
                    </div>
                ))}
            </div>

            <div className="scenario-content">
                <div className="character-section">
                    <div className="character-image">
                        <img 
                            src={sensoryMode ? 
                                "https://i.imgur.com/uqAKtQM.png" : 
                                "https://i.imgur.com/uqAKtQM.png"} 
                            alt="Guide" 
                        />
                    </div>
                    <div className="speech-bubble">
                        <div className="bubble-text">{currentPanel.text}</div>
                        <div className="sensory-hint">{sensoryMode && '💡 Tap options to choose'}</div>
                    </div>
                </div>

                <div className="question-section">
                    <h2>{currentPanel.question}</h2>
                    <div className="options-grid">
                        {currentPanel.options.map((option, index) => (
                            <button
                                key={index}
                                className={`option-button ${selectedOption === index ? 'selected' : ''}`}
                                onClick={() => handleOptionSelect(index)}
                                disabled={loading}
                                aria-label={`Option ${index + 1}: ${option.text}`}
                            >
                                <span className="option-emoji">{option.emoji || '💭'}</span>
                                <span className="option-text">{option.text}</span>
                                {sensoryMode && <div className="sensory-highlight"></div>}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="score-display">
                Score: <span className="score-value">{score}</span>
            </div>

            <FeedbackModal
                isOpen={showFeedback}
                isCorrect={isCorrect}
                feedback={feedback}
                onNext={handleNext}
                sensoryMode={sensoryMode}
            />

            {showCompletionBanner && (
                <div className="completion-banner">
                    <div className="completion-content">
                        <h2>🎉 {finalScore >= 5 ? 'Amazing Job!' : 'You Did It!'}</h2>
                        <p>You completed <strong>{scenario.title}</strong>!</p>
                        <div className="final-score">
                            <span>Your Score:</span>
                            <span className="score-value">{finalScore} / {scenario.panels.length}</span>
                        </div>
                        <p className="motivating-message">
                            {finalScore >= 5
                                ? 'You are a Social Superstar! Keep practicing your superpowers! 🌟'
                                : 'Great effort! Every try makes you stronger. Practice makes perfect! 💪'}
                        </p>
                        <button className="back-button" onClick={() => { setShowCompletionBanner(false); onBack(); }}>
                            Back to Scenarios
                        </button>
                    </div>
                </div>
            )}

            {loading && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                    <p>{sensoryMode ? 'Thinking...' : 'Checking your answer...'}</p>
                </div>
            )}

            {sensoryMode && (
                <div className="sensory-elements">
                    <div className="sensory-bubble bubble1"></div>
                    <div className="sensory-bubble bubble2"></div>
                    <div className="sensory-bubble bubble3"></div>
                </div>
            )}
        </div>
    );
};

export default Scenario;
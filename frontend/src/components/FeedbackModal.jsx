import React from 'react';
import '../styles/FeedbackModal.css';

const FeedbackModal = ({ isOpen, isCorrect, feedback, onNext }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className={`feedback-modal ${isCorrect ? 'correct' : 'incorrect'}`}>
                <div className="feedback-icon">
                    {isCorrect ? (
                        <div className="happy-face">
                            <div className="eyes">
                                <div className="eye animate-blink"></div>
                                <div className="eye animate-blink"></div>
                            </div>
                            <div className="mouth animate-smile"></div>
                            <div className="stars">
                                <div className="star twinkle-1"></div>
                                <div className="star twinkle-2"></div>
                                <div className="star twinkle-3"></div>
                            </div>
                            <div className="confetti-container">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className={`confetti confetti-${i % 5}`}></div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="thinking-face">
                            <div className="eyes">
                                <div className="eye animate-blink"></div>
                                <div className="eye animate-blink"></div>
                            </div>
                            <div className="mouth animate-thinking"></div>
                            <div className="sweat animate-drip"></div>
                            <div className="question-marks">
                                <div className="question-mark">?</div>
                                <div className="question-mark">?</div>
                            </div>
                        </div>
                    )}
                </div>
                <h2 className="feedback-title animate-text-pop">
                    {isCorrect ? 'Awesome! You got it! 🎉' : 'Oops! Let me help you! 🤔'}
                </h2>
                <div className="feedback-text animate-fade-in">{feedback}</div>
                <button 
                    className={`next-action-button ${isCorrect ? 'pulse-glow' : 'wiggle'}`}
                    onClick={onNext}
                >
                    {isCorrect ? (
                        <>
                            <span>Continue</span>
                            <span className="arrow animate-bounce-right">→</span>
                        </>
                    ) : (
                        <>
                            <span className="retry-icon animate-spin">↻</span>
                            <span>Try Again</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default FeedbackModal;
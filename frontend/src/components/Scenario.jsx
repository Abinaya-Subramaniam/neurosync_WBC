// import React, { useState, useEffect } from 'react';
// import FeedbackModal from './FeedbackModal';
// import '../styles/Scenario.css';

// const Scenario = ({ scenario, onBack }) => {
//     const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
//     const [showFeedback, setShowFeedback] = useState(false);
//     const [feedback, setFeedback] = useState('');
//     const [isCorrect, setIsCorrect] = useState(false);
//     const [score, setScore] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const [selectedOption, setSelectedOption] = useState(null);

//     const currentPanel = scenario.panels[currentPanelIndex];

//     // Visual timer for thinking time
//     useEffect(() => {
//         setSelectedOption(null);
//     }, [currentPanelIndex]);

//     const handleOptionSelect = async (optionIndex) => {
//         setSelectedOption(optionIndex);
//         setLoading(true);
//         try {
//             const response = await fetch(
//                 `http://localhost:8000/scenarios/${scenario.id}/check-answer`,
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         panel_index: currentPanelIndex,
//                         option_index: optionIndex,
//                     }),
//                 }
//             );

//             const result = await response.json();

//             if (!response.ok) {
//                 throw new Error(result.detail || 'Failed to check answer');
//             }

//             setIsCorrect(result.correct);
//             setFeedback(result.feedback);
//             if (result.correct) setScore(prev => prev + 1);
//         } catch (error) {
//             setIsCorrect(false);
//             setFeedback(`Error: ${error.message}. Please try again.`);
//         } finally {
//             setShowFeedback(true);
//             setLoading(false);
//         }
//     };

//     const handleNext = () => {
//         setShowFeedback(false);
//         if (currentPanelIndex < scenario.panels.length - 1) {
//             setCurrentPanelIndex(prev => prev + 1);
//         } else {
//             // Enhanced completion celebration
//             setTimeout(() => {
//                 alert(`Great job! You completed ${scenario.title}!\nYour score: ${score}/${scenario.panels.length}`);
//                 onBack();
//             }, 500);
//         }
//     };

//     return (
//         <div className={`scenario-game ${scenario.background} animate-background-fade`}>
//             <button className="back-button animate-float" onClick={onBack}>
//                 <span className="arrow">←</span> Back to Scenarios
//             </button>

//             <div className="scenario-panel-container">
//                 <div className="scenario-visual">
//                     <div className={`background-image ${scenario.background} animate-pulse-slow`}></div>
//                     <div className="character-speech animate-bounce">
//                         <div className="character-image"></div>
//                         <div className="speech-bubble animate-float">
//                             {currentPanel.text}
//                             <div className="speech-tail"></div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="scenario-question-box">
//                     <h3 className="question-text animate-text-wave">{currentPanel.question}</h3>
//                     <div className="options-container">
//                         {currentPanel.options.map((option, index) => (
//                             <button 
//                                 key={index}
//                                 className={`option-button ${loading ? 'disabled' : ''} 
//                                     ${selectedOption === index ? 'option-selected' : ''}
//                                     animate-float`}
//                                 onClick={() => handleOptionSelect(index)}
//                                 disabled={loading}
//                                 style={{
//                                     transitionDelay: `${index * 100}ms`
//                                 }}
//                             >
//                                 <span className="option-emoji animate-bounce">
//                                     {option.emoji || '💭'}
//                                 </span>
//                                 <span className="option-text">{option.text}</span>
//                                 {selectedOption === index && (
//                                     <div className="selection-indicator"></div>
//                                 )}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div className="progress-container">
//                 <div className="progress-bar">
//                     <div 
//                         className="progress-fill animate-grow-width"
//                         style={{ 
//                             width: `${(currentPanelIndex + 1) / scenario.panels.length * 100}%`,
//                             transition: 'width 0.8s ease-in-out'
//                         }}
//                     ></div>
//                 </div>
//                 <div className="progress-text animate-text-glow">
//                     Panel {currentPanelIndex + 1} of {scenario.panels.length} • 
//                     <span className="score"> Score: {score}</span>
//                 </div>
//             </div>

//             <FeedbackModal 
//                 isOpen={showFeedback}
//                 isCorrect={isCorrect}
//                 feedback={feedback}
//                 onNext={handleNext}
//             />

//             {loading && (
//                 <div className="loading-overlay">
//                     <div className="loading-spinner animate-spin"></div>
//                     <div className="loading-text animate-pulse">Thinking...</div>
//                 </div>
//             )}

//             {/* Visual calming elements */}
//             <div className="calming-elements">
//                 <div className="bubble bubble-1"></div>
//                 <div className="bubble bubble-2"></div>
//                 <div className="bubble bubble-3"></div>
//             </div>
//         </div>
//     );
// };

// export default Scenario;


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
                alert(`Great job! You completed ${scenario.title}!\nYour score: ${score}/${scenario.panels.length}`);
                onBack();
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
                                "https://i.imgur.com/soft-mufasa.png" : 
                                "https://i.imgur.com/mufasa.png"} 
                            alt="Guide" 
                        />
                    </div>
                    <div className="speech-bubble">
                        {currentPanel.text}
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
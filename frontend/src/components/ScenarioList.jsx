import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scenario from './Scenario';
import '../styles/ScenarioList.css';
import Navbar from './Navbar';

const ScenarioList = () => {
    const [scenarios, setScenarios] = useState([]);
    const [sensoryMode, setSensoryMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/scenarios')
            .then(response => response.json())
            .then(data => {
                setScenarios(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching scenarios:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="loading-screen">
            <div className="spinner animate-spin"></div>
            <p className="animate-pulse">Loading fun scenarios...</p>
            <div className="loading-dots">
                <span className="dot dot-1">.</span>
                <span className="dot dot-2">.</span>
                <span className="dot dot-3">.</span>
            </div>
        </div>
    );
    
    if (selectedScenario) {
        return <Scenario 
            scenario={selectedScenario} 
            onBack={() => setSelectedScenario(null)} 
        />;    }    return (
        <div className={`scenario-list-container page-wrapper ${sensoryMode ? 'sensory-mode' : ''}`}>
            <Navbar sensoryMode={sensoryMode} />
            <header className="scenario-header">
                <h1 className="animate-text-gradient">Social Sense Adventure!</h1>
                <p className="subtitle animate-float">Choose a scenario to practice your super social skills:</p>
            </header>
            
            <div className="scenario-grid">
                {scenarios.map(scenario => (
                    <div 
                        key={scenario.id} 
                        className={`scenario-card ${scenario.background} 
                            ${hoveredCard === scenario.id ? 'card-hover' : ''}
                            animate-float`}
                        onClick={() => {
                            setSelectedScenario(scenario);
                            // Play a soft click sound for feedback
                            new Audio('/sounds/soft-click.mp3').play().catch(() => {});
                        }}
                        onMouseEnter={() => setHoveredCard(scenario.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                            transitionDelay: `${scenario.id % 3 * 100}ms`
                        }}
                    >
                        <div className="card-content">
                            {scenario.image && (
                                <img 
                                    src={scenario.image} 
                                    alt={scenario.title + ' image'} 
                                    className="scenario-card-image"
                                    style={{ width: '100%', maxHeight: '140px', objectFit: 'cover', borderRadius: '16px', marginBottom: '10px' }}
                                />
                            )}
                           
                            <h3 className="animate-text-glow">{scenario.title}</h3>
                            <p>{scenario.description}</p>
                            <button className="play-button animate-bounce">
                                Let's Play!
                                <span className="play-arrow">→</span>
                            </button>
                        </div>
                        <div className="card-glow"></div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ScenarioList;
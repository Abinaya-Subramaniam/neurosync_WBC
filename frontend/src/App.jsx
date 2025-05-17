import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScenarioList from './components/ScenarioList';
import DrawingBoard from './components/DrawingCanvas';  
import Talkmate from './components/TalkMate';
import LandingPage from './pages/LandingPage';
import './App.css';


function App() {
    return (

            <div className="App">
                <main style={{ paddingTop: '0.5rem' }}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/draw" element={<DrawingBoard />} />
                        <Route path="/talk" element={<Talkmate />} />
                        <Route path="/scenarios" element={<ScenarioList />} />
                    </Routes>
                </main>
            </div>
    
    );
}

export default App;
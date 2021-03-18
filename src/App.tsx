import React from 'react';
import './App.css';

import Home from './pages/home';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Home />
            </header>
        </div>
    );
};

export default App;

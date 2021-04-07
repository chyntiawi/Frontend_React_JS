import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import BaseRouter from './routes';

const App = () => (
    <Router>
        <BaseRouter />
    </Router>
);

export default App;

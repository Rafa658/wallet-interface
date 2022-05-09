import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import RoutesElement from './routes';
import Aside from './Views/Aside/Aside';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Aside/>
      <RoutesElement/>
    </Router>
)

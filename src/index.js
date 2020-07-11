import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import UnifiedView from './views/unifiedView'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (<BrowserRouter>
        <UnifiedView />
    </BrowserRouter>),
    document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import {createStore} from 'redux';
import {Provider}  from 'react-redux';
import reducer from './reducer/reducer';

const store = createStore(reducer);
const app = (
        <BrowserRouter>
            <Provider  store={store}>
                 <App />
            </Provider>
        </BrowserRouter>
  
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

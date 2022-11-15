import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'mobx-react'
import { RootState } from './states';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const states = new RootState()

root.render(
    <Provider {...states}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

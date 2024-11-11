import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const handleVisibilityChange = () => {
    if (document.hidden) {
        document.title = 'Feel free to contact me!';
    } else {
        document.title = 'Mateusz Maciaszczyk';
    }
};

const AppWithVisibilityChange = () => {
    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return <App />;
};

root.render(
  <React.StrictMode>
    <AppWithVisibilityChange />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

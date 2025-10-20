import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <ReduxProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>

);

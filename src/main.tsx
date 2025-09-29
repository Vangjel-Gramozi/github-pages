import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter} from "react-router-dom"
import {StoriesProvider} from "./context/StoriesProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoriesProvider>
            <HashRouter>
                <App/>
            </HashRouter>
        </StoriesProvider>
    </StrictMode>,
)

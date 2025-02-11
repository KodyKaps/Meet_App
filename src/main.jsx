import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as atatus from 'atatus-spa';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

atatus.config('de4221f150714c519f79f33e157eb54b').install();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
serviceWorkerRegistration.register();

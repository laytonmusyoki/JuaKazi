import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './features/store.js'
import { setStore } from './utils/storeHolder';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


setStore(store);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
  

  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SearchContextProvider from './Context/SearchContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <SearchContextProvider>
    <App />
  </SearchContextProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BasketProvider from './context/BasketContext/basketContext.jsx'
import WishlistProvider from './context/WishlistContext/wishlistContext.jsx'
import SearchProvider from './context/SearchContext/searchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
      <WishlistProvider>
        <SearchProvider>
        <App />
        </SearchProvider>
      </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>,
)

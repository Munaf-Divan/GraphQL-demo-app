import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { cacheExchange, createClient, fetchExchange, Provider } from 'urql'

import { App } from './App.tsx'

const client = createClient({
    url: import.meta.env.VITE_API_URL,
    exchanges: [cacheExchange, fetchExchange],
})
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider value={client}>
            <App />
        </Provider>
    </React.StrictMode>
)

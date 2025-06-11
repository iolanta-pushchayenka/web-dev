import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import store from './store/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)





























//const header = decument.createElement('h1')
//header.innerHTML = 'hello world'
//const root = document.querySelector('#main')
//root.appendChild(header)


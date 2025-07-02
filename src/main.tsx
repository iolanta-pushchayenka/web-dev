import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import store from './store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from './context/ThemeContext'
import './styles/theme.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ThemeProvider>
  <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>
  </StrictMode>,
)





























//const header = decument.createElement('h1')
//header.innerHTML = 'hello world'
//const root = document.querySelector('#main')
//root.appendChild(header)


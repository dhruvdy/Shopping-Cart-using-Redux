import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {store} from './reduxStore.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
   <div>

    <BrowserRouter>

      <Provider store={store}>
        <App />
      </Provider>
      
      <ToastContainer/>  
      
    </BrowserRouter>

   </div>
)

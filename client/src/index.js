import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import CartStore from './store/CartStore';


export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
        cart: new CartStore(),
      }}>
        <App />
      </Context.Provider>
  </React.StrictMode>
);
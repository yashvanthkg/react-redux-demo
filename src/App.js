import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;

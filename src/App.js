import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <CakeContainer />
    </div>
    </Provider>
  );
}

export default App;

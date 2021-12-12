import React from 'react';
import './css/main.css'
import { Main } from './Main';
import { Provider } from './UC';
function App() {

  return (
    <div className='main'>
    <h1 className='header'> Slot Game </h1>
    <Provider>
    <Main />
    </Provider>
    </div>
  );
}

export default App;

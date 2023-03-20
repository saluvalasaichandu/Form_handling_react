import React from 'react'
import Greet from './components/Welcome';
const App=()=> {
  return (
    <div className="App">
      <Greet name="sai" age="20"/>
      <button>sai</button>
      <Greet name="chandu" age="21"/>
      <button>chandu</button>
      <Greet name="saichandu"age="22" />
      <button>saichandu</button>
    </div>
  );
}

export default App;


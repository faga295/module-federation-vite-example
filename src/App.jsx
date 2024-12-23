import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Plugin1 from "./plugins/plugin1";
import Plugin2 from "./plugins/plugin2";
// import viteLogo from './assets/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Plugin1></Plugin1>
      <Plugin2></Plugin2>
    </div>
  );
}

export default App;

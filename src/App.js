import logo from './logo.svg';
import './App.css';
import { useAppContext } from './context/appContext';


function App() {
  const {name, flipName } = useAppContext()
  return (
    <div className="App">
      <p>{ name}</p>
      <button onClick={() => flipName()}>Show Family Name</button>
      
    </div>
  );
}

export default App;

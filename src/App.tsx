import './App.css';
import { signInWithGoogle } from './Firebase';

function App() {

  const handleClick = () =>{
    signInWithGoogle();
  }
  return (
    <div className="App">
      <button onClick={handleClick}>
        click here to login
      </button>
    </div>
  );
}

export default App;

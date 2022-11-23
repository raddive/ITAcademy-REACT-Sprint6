import './App.css';
import Escena from './components/escena/Escena';
import data from './data';

function App() {

  const escenas = data.map( escena => {
      return (
        <Escena 
          escena = {escena}
        />
      );
  });
  
  return (
    <div>
      {escenas}
    </div>
  );
}

export default App;

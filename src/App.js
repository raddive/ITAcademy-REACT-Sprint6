import {React, useEffect, useState} from 'react';
import './App.css';
import Landing from './components/Landing';
import Content from './components/Content';


function App() {

//STATES
  const [bShowStart,setShowStart] = useState(true);


//USE EFFECTS
  useEffect(() => 
    {

    }
    , [bShowStart]);

  //Como está vacio, en PPO solo se llama al cargarq
  useEffect( () => 
    {
      //llamada a un API para recargar datos por ejemplo!!!!    
    },[]);

//LOGICA
  
//RENDER
  return (
    <div>
      {bShowStart && (
        <div>
          <Landing 
            setShowStart = {setShowStart}/>
        </div>
      )}
      {!bShowStart && (
        <div>
          <Content />
        </div>
      )}
    </div>
  );
}

export default App;

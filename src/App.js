import {React, useEffect, useState} from 'react';
import './App.css';
import Escena from './components/escena/Escena';
import data from './data';
import { Btn50 } from './styled';


function App() {

//STATES
//JS //let variable = "Hola"
  const [iActivo,setActivo] = useState(0);


//USE EFFECTS
//JS window.addEventListener('load', (event) => ()
  useEffect(() => 
    {

    }
    , [iActivo]);

  //Como está vacio, en PPO solo se llama al cargarq
  useEffect( () => 
    {
      //llamada a un API para recargar datos por ejemplo!!!!
    
    },[]);

//LOGICA
  const navBtn = (iDir) => 
  {
      if(iDir === -1 && iActivo>0)
      {
        setActivo(iActivo-1);
      }
      else if (iDir === 1 && iActivo<escenas.length-1)
      {
        setActivo(iActivo+1);
      }
  };


//MAPPING  
  const escenas = data.map( (escena,index) => {
      return (
        <div>
          <Escena 
              key = {index}
              escena = {escena}
              activo = {iActivo}
              current = {index}
            />   
        </div>
      );
  });
  

//RENDER
  return (
    <div>
       <Btn50 onClick={() => navBtn(-1)}>ANTERIOR</Btn50><Btn50 onClick={() => navBtn(1)}>SIGUIENTE</Btn50>
      {escenas}
    </div>
  );
}

export default App;

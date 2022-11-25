import {React, useEffect, useState} from 'react';
import Escena from './Escena';
import data from '../data';
import { IMGDiv } from '../styled';



export default function Content ()
{
//STATES
//JS //let variable = "Hola"
const [iActivo,setActivo] = useState(0);
const [scn_img,setScnImg] = useState("0.jpg");

//USE EFFECTS
useEffect(() => 
  {
    setScnImg(data[iActivo].img)
  }
  , [iActivo]);

//Como está vacio, en PPO solo se llama al cargar
useEffect( () => 
  {
    //llamada a un API para recargar datos por ejemplo!!!!
  },[]);

//LOGICA
  const navBtn = (iDir) => 
  {
      if(iDir === -1 && iActivo>0)
        setActivo(iActivo-1);
      else if (iDir === 1 && iActivo<data.length-1)
        setActivo(iActivo+1);
  };

//MAPPING  
  const escenas = data.map( (item,index) => {
      return (
        <div key = {index}>
          <Escena 
              txt = {item.txt}
              img = {item.img}
              activo = {iActivo}
              current = {index}
            />   
        </div>
      );
  });

//RENDER
  return (
    <div>
       <button className='btn_50' onClick={() => navBtn(-1)}>ANTERIOR</button><button className='btn_50' onClick={() => navBtn(1)}>SIGUIENTE</button >
       <IMGDiv
          img = {scn_img}>  
          {escenas}
       </IMGDiv>
      
    </div>
  );
}
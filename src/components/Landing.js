import React from 'react';

export default function Landing (props)
{
    const startBtn = () =>
    {
        // console.log("click");
        props.setShowStart(false);
    };

    return (
        <div className='landing_div'>
            <h1>PAGINA DE INICIO ITACADEMY - REACT. SPRINT 6 </h1>
            <p>Tutorial básico de consejos de utilización de la página de gestión</p>
            <button onClick={() => startBtn()}>EMPECEMOS</button>
        </div>
    );
}
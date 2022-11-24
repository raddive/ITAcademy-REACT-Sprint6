import React from "react";
import { H3Border} from "../../styled";


export default function Escena (props) {
    return (
        <H3Border 
            activo={props.activo}
            current = {props.current}>
                {props.escena}
        </H3Border>
    ); 

};
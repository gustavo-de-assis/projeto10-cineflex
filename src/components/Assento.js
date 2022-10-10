import { useState } from "react"
import styled from "styled-components"


export default function Assento(props) {
    const {id, name, isAvailable} = props;
    const[cadeira, setCadeira] = useState(isAvailable);


    return (<EstiloAssento isAvailable={isAvailable} onClick={()=>console.log(isAvailable)}>
        {name}
    </EstiloAssento>
    )
}

const EstiloAssento = styled.li`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: #aaa;
    background-color: ${props => props.isAvailable === true ? 'green' : 'red'};
    display: flex;
    align-items: center;
    justify-content: center;
`
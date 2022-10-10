import { useState } from "react"
import styled from "styled-components"


export default function Assento(props) {
    const {id, name, isAvailable} = props;

    const[corCadeira, setCorCadeira] = useState('#3546ee');
    const[escolhidos, setEscolhidos] = useState([]);
    
    function selecionaCadeira(id){
        setCorCadeira('#55ee66');
        setEscolhidos([...escolhidos, id])
    }

    return (
        <>
    { isAvailable ? 
    <EstiloAssento color={corCadeira} onClick={()=>selecionaCadeira(id)}>
        {name}
    </EstiloAssento>
    :
    <EstiloAssento color={"#dd0033"} onClick={()=>(alert("Assento indisponível!"))}> {name} </EstiloAssento>
    }
    </>
    )
}

const EstiloAssento = styled.li`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: #aaa;
    background-color: ${props => props.color === "" ? '' : props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        opacity: 0.7;
        cursor: pointer;
    }
`
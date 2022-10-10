import { useState } from "react"
import styled from "styled-components"


export default function Assento(props) {
    const {id, name, isAvailable, escolhidos, setEscolhidos, infoFinalizado, setInfoFinalizado} = props;

    const numAssentos = infoFinalizado.assentos;

    const[corCadeira, setCorCadeira] = useState('#C3CFD9');
    
    function selecionaCadeira(id, name){
        let idsEscolhidos;
        let numEscolhidos;

        if(escolhidos.includes(id)){
           idsEscolhidos = escolhidos.filter((item)=> item !== id)
           numEscolhidos = numAssentos.filter((item)=> item !== name)
           setCorCadeira('#C3CFD9');
        }else{
            idsEscolhidos = [...escolhidos, id];
            numEscolhidos = [...numAssentos, name];
            setCorCadeira('#1AAE9E');
        }
        setEscolhidos(idsEscolhidos);
        setInfoFinalizado({...infoFinalizado, assentos: numEscolhidos});
    
    }

    return (
        <>
    { isAvailable ? 
    <EstiloAssento color={corCadeira} 
    onClick={()=>selecionaCadeira(id,name)}>
        {name}
    </EstiloAssento>
    :
    <EstiloAssento color={"#FBE192"} 
    onClick={()=>(alert("Assento indisponível!"))}> {name} </EstiloAssento>
    }
    </>
    )
}

const EstiloAssento = styled.li`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: #111;
    background-color: ${props => props.color === "" ? '' : props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        opacity: 0.7;
        cursor: pointer;
    }
`
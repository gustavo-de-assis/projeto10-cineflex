import { useState } from "react"
import styled from "styled-components"


export default function Assento(props) {
    const {id, name, isAvailable, escolhidos, setEscolhidos, infoFinalizado, setInfoFinalizado} = props;

    const numAssentos = infoFinalizado.assentos;

    const[corCadeira, setCorCadeira] = useState('#3546ee');
    
    function selecionaCadeira(id, name){
        let idsEscolhidos;
        let numEscolhidos;

        if(escolhidos.includes(id)){
           idsEscolhidos = escolhidos.filter((item)=> item !== id)
           numEscolhidos = numAssentos.filter((item)=> item !== name)
           setCorCadeira('#3546ee');
        }else{
            idsEscolhidos = [...escolhidos, id];
            numEscolhidos = [...numAssentos, name];
            setCorCadeira('#55ee66');
        }
        setEscolhidos(idsEscolhidos);
        setInfoFinalizado({...infoFinalizado, assentos: numEscolhidos});
        console.log("ids",idsEscolhidos);
        console.log("cadeiras",numEscolhidos);
    }

    return (
        <>
    { isAvailable ? 
    <EstiloAssento color={corCadeira} onClick={()=>selecionaCadeira(id,name)}>
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
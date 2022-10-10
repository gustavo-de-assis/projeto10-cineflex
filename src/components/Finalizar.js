import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Finalizar({infoFinalizado}){
    return(
        <Fim>
            <Titulo>
                <h1>
                Pedido feito com Sucesso
                </h1>
            </Titulo>
            <InfoSecao>
                <h1>
                    Filme e Sessao
                </h1>
                <p>
                    {infoFinalizado.filme}
                </p>
                <p>{infoFinalizado.data} às {infoFinalizado.horario}</p>
            </InfoSecao>
            <InfoSecao>
                <h1>Ingressos</h1>
                {infoFinalizado.assentos.map((item)=><p>Assento: {item}</p>)}
            </InfoSecao>
            <InfoSecao>
                <h1>Comprador</h1>
                <p>Nome: {infoFinalizado.nome}</p>
                <p>Cpf: {infoFinalizado.cpf}</p>
            </InfoSecao>
           
            <Retornar>
                <Link to="/">Voltar à Home</Link>
            </Retornar>
           

        </Fim>
    )
}

const Fim = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
        margin: 15px;
    }

`
const Titulo = styled.div`
    font-size: 30px;
    color: #228822;
    text-align: center;
    
`
const InfoSecao = styled.div`
    h1{
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 5px;
    }
    p{
        font-size: 18px;
        margin-bottom: 2px;
    }
`
const Retornar = styled.div`
    width: 140px;
    height: 50px;

    border-radius: 12px;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ee9955;
    
    align-self: center;
    
    :hover{
        opacity: 0.7;
        cursor: pointer;
    }
    
`

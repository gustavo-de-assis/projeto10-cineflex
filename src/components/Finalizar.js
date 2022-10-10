import styled from "styled-components";

export default function Finalizar({infoFinalizado}){
    return(
        <Fim>
            <div>
                <h1>
                Pedido feito com Sucesso
                </h1>
            </div>
            <div>
                <h1>
                    Filme e Sessao
                </h1>
                <p>
                    {infoFinalizado.filme}
                </p>
                <p>{infoFinalizado.data} às {infoFinalizado.horario}</p>
            </div>
            <div>
                <h1>Ingressos</h1>
                {infoFinalizado.assentos.map((item)=><p>Assento: {item}</p>)}
            </div>
            <div>
                <h1>Comprador</h1>
                <p>{infoFinalizado.nome}</p>
                <p>{infoFinalizado.cpf}</p>
            </div>
        </Fim>
    )
}

const Fim = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    div{
        margin: 15px;
        text-align: left;
    }
`
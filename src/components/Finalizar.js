import styled from "styled-components";

export default function Finalizar(){
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
                    Blababla
                </p>
                <p>dia tal do tal a tal horas</p>
            </div>
            <div>
                <h1>Ingressos</h1>
                <p>assento tal e tal</p>
            </div>
            <div>
                <h1>Comprador</h1>
                <p>Nome</p>
                <p>cpf</p>
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
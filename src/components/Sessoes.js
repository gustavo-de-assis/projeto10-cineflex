import styled from "styled-components";

export default function Sessoes() {
    return (
        <LayoutSessao>
            <h1> Selecione o Horario</h1>
            <p>Quinta Feira, 24/09/2022</p>
            <div>
                <Horarios>
                    <Horario> 15:00</Horario>
                    <Horario> 19:00</Horario>
                </Horarios>
            </div>
            <p>Sexta Feira, 25/09/2022</p>
            <div>
                <Horarios>
                    <Horario> 15:00</Horario>
                    <Horario> 19:00</Horario>
                </Horarios>
            </div>
        </LayoutSessao>
    )
}

const LayoutSessao = styled.div`
    width: 375px;
    height: 880px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Horarios = styled.div`
    display: flex;
    flex-direction: row;
`

const Horario = styled.button`
    width: 150px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;

    margin: 15px;
`
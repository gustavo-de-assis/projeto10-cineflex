import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Assento from "./Assento";

export default function Assentos() {
    const [assentos, setAssentos] = useState([]);
    const { idSessao } = useParams();
    const [escolhidos, setEscolhidos] = useState([]);

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
        axios.get(URL).then((ans) => {
            setAssentos(ans.data);
        }).catch((err) => { console.log(err.response.data.message) })
    }, []);

    if (assentos.length === 0) {
        return (<>
            Carregando...
        </>)
    }

    return (
        <>
            <LayoutAssentos>
                <h1>Selecione o(s) assento(s)</h1>
                <ul>
                    {assentos.seats.map((a) => <Assento
                        key={a.id}
                        id={a.id}
                        isAvailable={a.isAvailable}
                        name={a.name}
                        escolhidos={escolhidos}
                        setEscolhidos={setEscolhidos}
                    />)}
                </ul>
                <LegendaAssentos>
                    <div>
                        <p>Selecionado</p>
                        <Cadeira color={'#55ee66'} />
                    </div>
                    <div>
                        <p>Disponivel</p>
                        <Cadeira color={'#3546ee'} />

                    </div>
                    <div>
                        <p>Indisponivel</p>
                        <Cadeira color={'#dd0033'} />
                    </div>
                </LegendaAssentos>
            </LayoutAssentos>

            <Formulario>
                <form>
                    <div>
                        <label >Nome do Comprador</label>
                        <input name="name"></input>
                    </div>
                    <div>
                        <label>CPF</label>
                        <input id="CPF" name="cpf"></input>
                    </div>

                </form>
            </Formulario>


        </>
    )
}

const LayoutAssentos = styled.div`
    width: 375px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin: 10px;
    }
    ul{
        width: 80%;
        display: flex;
        flex-flow: row wrap;
        margin: 5px;
        gap: 10px;
    }
`
const LegendaAssentos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 5px;
    margin: 20px 0;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

`
const Cadeira = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    
    background-color: ${props => props.color === "" ? '' : props.color};
`

const Formulario = styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div{
            width: 300px;
            height: 60px;
            display: flex;
            flex-direction: column;
            margin: 5px;
        }
    }
`
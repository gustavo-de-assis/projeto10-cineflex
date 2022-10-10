import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Assento from "./Assento";

export default function Assentos() {
    const [assentos, setAssentos] = useState([]);
    const { idSessao } = useParams();

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
        <LayoutAssentos>
            <h1>Selecione o(s) assento(s)</h1>
            <ul>
                {assentos.seats.map((a) => <Assento
                    key={a.id}
                    id={a.id}
                    isAvailable={a.isAvailable}
                    name={a.name}
                />)}
            </ul>

            <LegendaAssentos>
                <div>
                    <p>Selecionado</p>
                    <Assento style={{ background: "#33cc44" }} />
                </div>
                <div>
                    <p>Disponivel</p>
                    <Assento />

                </div>
                <div>
                    <p>Indisponivel</p>
                    <Assento style={{ background: "#cc3344" }} />
                </div>
            </LegendaAssentos>

            <form>
                <label >Nome do Comprador</label>
                <input name="name"></input>
                <label>CPF</label>
                <input id="CPF" name="cpf"></input>

            </form>


        </LayoutAssentos>
    )
}

const LayoutAssentos = styled.div`
    width: 375px;
    height: 880px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
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
    align-items: center;
    justify-content: space-between;

    margin: 5px;
    padding: 5px;

    gap: 5px;

`

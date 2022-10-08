import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Rodape from "./Rodape";

export default function Sessoes() {
    const {idFilme} = useParams();
    const [filme, setFilme] = useState({});
    
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        axios.get(URL).then((ans) => {
            console.log(ans.data)
            setFilme(ans.data);
        }).catch((err) => { console.log(err.response.data.message) })
    }, []);
    
    
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
            <Rodape filme={filme}/>
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
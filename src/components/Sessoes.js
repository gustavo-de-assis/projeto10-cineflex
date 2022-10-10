import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Rodape from "./Rodape";
import Sessao from "./Sessao";
import imgCarregando from "../assets/img/rolo-filme.gif"


export default function Sessoes() {
    const { idFilme } = useParams();
    const [filme, setFilme] = useState([]);

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        axios.get(URL).then((ans) => {
            setFilme(ans.data);
        }).catch((err) => { alert(err.response.data.message) })
    }, []);

    if (filme.length === 0){
        return (<Loading>
            <p>Carregando...</p>
            <img src={imgCarregando} alt="Carregando" />
        </Loading>)
    }

    return (
        <LayoutSessao>
            <h1> Selecione o Horario</h1>
            { filme.days.map((item) => 
                <Sessao
                    key={item.id}
                    id={item.id}
                    weekday={item.weekday}
                    date={item.date}
                    showtimes={item.showtimes}
                />
            )
            }

            <Rodape filme={filme} />
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
const Loading = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        aspect-ratio: 16/9;
        width: 200px;
        margin: 60px;
    }
`
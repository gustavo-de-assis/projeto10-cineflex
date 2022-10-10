import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imgCarregando from "../assets/img/rolo-filme.gif"

import Filme from "./Filme";

export default function Catalogo() {
    const [listaFilmes, setFilmes] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        axios.get(URL).then((ans) => {
            setFilmes(ans.data)
        }).catch((err) => { alert(err.response.data.message) })
    }, []);

    if (listaFilmes === false || listaFilmes.length === 0) {
        return (<Loading>
            <p>Carregando...</p>
            <img src={imgCarregando} alt="Carregando" />
        </Loading>)
    }

    return (
        <Filmes>
            {listaFilmes.map((item) =>
                <Link to={`/sessoes/${item.id}`}>
                    <Filme
                        key={item.id}
                        imagem={item.posterURL}
                        titulo={item.title} />
                </Link>
            )
            }
        </Filmes>
    )
}

const Filmes = styled.div`
    
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    overflow: scroll;
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
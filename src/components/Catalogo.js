import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Filme from "./Filme";

export default function Catalogo() {
    const [listaFilmes, setFilmes] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        axios.get(URL).then((ans) => {
            setFilmes(ans.data)
        }).catch((err) => { console.log(err.response.data) })
    }, []);

    if(listaFilmes === false || listaFilmes.length === 0){
        return(<>
            Carregando...
        </>)
    }

    console.log(listaFilmes);

    return (
        <Filmes>
               {listaFilmes.map((item) => 
                <Filme
                    key={item.id}
                    imagem={item.posterURL}
                    titulo={item.title} />
            
            )
            }
        </Filmes>
    )
}

const Filmes = styled.div`
    width: 375px;
    height: 880px;
    
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    overflow: scroll;
`



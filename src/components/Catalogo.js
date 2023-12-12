import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Filme from "./Filme";
import Loading from "./Loading";

export default function Catalogo() {
  const [listaFilmes, setFilmes] = useState([]);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    axios
      .get(URL)
      .then((ans) => {
        setFilmes(ans.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  if (listaFilmes === false || listaFilmes.length === 0) {
    return <Loading />;
  }

  return (
    <Filmes>
      <div>
        {listaFilmes.map((item) => (
          <Link to={`/sessoes/${item.id}`}>
            <Filme key={item.id} imagem={item.posterURL} titulo={item.title} />
          </Link>
        ))}
      </div>
    </Filmes>
  );
}

const Filmes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  @media (min-width: 768px) {
    margin-top: 150px;
    div {
      width: 80%;
    }
  }
  @media (min-width: 1024px) {
    margin-top: 180px;
  }
`;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Rodape from "./Rodape";
import Sessao from "./Sessao";
import Loading from "./Loading";

export default function Sessoes() {
  const { idFilme } = useParams();
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;
    axios
      .get(URL)
      .then((ans) => {
        setFilme(ans.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  if (filme.length === 0) {
    return <Loading />;
  }

  return (
    <LayoutSessao>
      <h1> Selecione o Horario</h1>
      {filme.days.map((item) => (
        <Sessao
          key={item.id}
          id={item.id}
          weekday={item.weekday}
          date={item.date}
          showtimes={item.showtimes}
        />
      ))}

      <Rodape filme={filme} />
    </LayoutSessao>
  );
}

const LayoutSessao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin-top: 120px;
  margin-bottom: 120px;

  h1 {
    font-size: 26px;
  }

  @media (min-width: 768px) {
    margin-top: 160px;
    margin-bottom: 160px;
    h1 {
      font-size: 30px;
    }
  }
`;

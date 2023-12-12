import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Assento from "./Assento";
import Rodape from "./Rodape";
import Loading from "./Loading";

export default function Assentos({ infoFinalizado, setInfoFinalizado }) {
  const [assentos, setAssentos] = useState([]);
  const { idSessao } = useParams();
  const [escolhidos, setEscolhidos] = useState([]);
  const [comprador, setComprador] = useState("");
  const [cpfComprador, setCpfComprador] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
    axios
      .get(URL)
      .then((ans) => {
        const resposta = ans.data;
        setAssentos(resposta);
        setInfoFinalizado({
          ...infoFinalizado,
          filme: resposta.movie.title,
          horario: resposta.name,
          data: resposta.day.date,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  function reservaAssentos(e) {
    e.preventDefault();
    if (escolhidos.length === 0) {
      alert("Por favor, escolha pelo menos 1 assento");
      return;
    } else {
      const solicitacao = {
        ids: escolhidos,
        name: comprador,
        cpf: cpfComprador,
      };

      const infoSessao = {
        ...infoFinalizado,
        nome: solicitacao.name,
        cpf: solicitacao.cpf,
      };

      setInfoFinalizado(infoSessao);

      const URL = `https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`;
      axios
        .post(URL, solicitacao)
        .then((ans) => {
          navigate("/ingresso");
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  }

  if (assentos.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <LayoutAssentos>
        <h1>Selecione o(s) assento(s)</h1>
        <ul>
          {assentos.seats.map((a) => (
            <Assento
              key={a.id}
              id={a.id}
              isAvailable={a.isAvailable}
              name={a.name}
              escolhidos={escolhidos}
              setEscolhidos={setEscolhidos}
              infoFinalizado={infoFinalizado}
              setInfoFinalizado={setInfoFinalizado}
            />
          ))}
        </ul>
        <LegendaAssentos>
          <div>
            <p>Selecionado</p>
            <Cadeira color={"#1AAE9E"} />
          </div>
          <div>
            <p>Disponivel</p>
            <Cadeira color={"#C3CFD9"} />
          </div>
          <div>
            <p>Indisponivel</p>
            <Cadeira color={"#FBE192"} />
          </div>
        </LegendaAssentos>
      </LayoutAssentos>

      <Formulario>
        <form onSubmit={reservaAssentos}>
          <div>
            <label>Nome do Comprador</label>
            <input
              name="name"
              onChange={(e) => setComprador(e.target.value)}
              placeholder="Digite seu Nome"
              required
            ></input>
          </div>
          <div>
            <label>CPF do Comprador</label>
            <input
              id="CPF"
              name="cpf"
              onChange={(e) => setCpfComprador(e.target.value)}
              placeholder="Digite seu CPF..."
              pattern="\d{3}.?\d{3}.?\d{3}-?\d{2}"
              required
            ></input>
          </div>
          <button type="submit">Reservar Assentos</button>
        </form>
      </Formulario>

      <Rodape
        filme={assentos.movie}
        horario={assentos.name}
        dia={assentos.day.weekday}
      />
    </>
  );
}

const LayoutAssentos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 20px;
    font-size: large;
    font-weight: 600;
  }
  ul {
    width: 330px;
    display: flex;
    flex-flow: row wrap;
    margin: 5px;
    gap: 10px;
    justify-content: center;
  }
  margin-top: 160px;

  @media (min-width: 768px) {
    ul {
      width: 400px;
    }
  }
`;
const LegendaAssentos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 12px;
  font-weight: 600;

  gap: 15px;
  margin: 20px 0;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) {
    gap: 50px;
    margin: 40px 0;
  }
`;
const Cadeira = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;

  background-color: ${(props) => (props.color === "" ? "" : props.color)};

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Formulario = styled.div`
  margin-bottom: 160px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      width: 300px;
      height: 60px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin: 5px;
    }
    button {
      width: 140px;
      height: 50px;

      border-radius: 12px;
      border-style: none;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e8833a;

      :hover {
        opacity: 0.7;
      }
    }

    @media (min-width: 768px) {
      div {
        width: 500px;
        gap: 10px;
      }

      button {
        width: 200px;
        height: 70px;

        font-size: large;
      }
    }
  }
`;

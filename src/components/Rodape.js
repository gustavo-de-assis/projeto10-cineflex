import styled from "styled-components";

export default function Rodape({ filme, horario, dia }) {
  return (
    <LayoutRodape>
      <img src={filme.posterURL} alt={filme.title} />
      <Textos>
        <h1>{filme.title}</h1>

        {dia ? (
          <p>
            {dia} - {horario}{" "}
          </p>
        ) : (
          <></>
        )}
      </Textos>
    </LayoutRodape>
  );
}

const LayoutRodape = styled.div`
  width: 100%;
  height: 100px;
  background-color: #c3cfd9;
  opacity: 92%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  position: fixed;
  z-index: 1;
  bottom: 0;

  img {
    height: 100%;
    aspect-ratio: 3/4;
  }
`;
const Textos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  h1 {
    font-size: 20px;
  }
`;

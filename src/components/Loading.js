import styled from "styled-components";
import imgCarregando from "../assets/img/rolo-filme.gif";

export default function Loading() {
  return (
    <ItemLoading>
      <p>Carregando...</p>
      <img src={imgCarregando} alt="Carregando" />
    </ItemLoading>
  );
}

const ItemLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 200px;
  img {
    aspect-ratio: 16/9;
    width: 200px;
    margin: 30px;
  }
  @media (min-width: 768px) {
    margin-top: 240px;
    img {
      width: 250px;
    }
  }
`;

import styled from "styled-components";

export default function Topo() {
  return <ItemTopo>CINEFLEX</ItemTopo>;
}

const ItemTopo = styled.div`
  width: 100%;
  height: 100px;
  background-color: #c3cfd9;

  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
  align-items: center;
  justify-content: center;

  color: #e8833a;
  font-family: Kalnia, sans-serif;
  font-size: 40px;
  font-weight: 500;

  margin-bottom: 10px;

  @media (min-width: 768px) {
    height: 120px;

    font-size: 60px;

    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    height: 150px;

    font-size: 80px;

    margin-bottom: 40px;
  }
`;

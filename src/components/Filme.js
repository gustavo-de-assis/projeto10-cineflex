import styled from "styled-components";
export default function Filme({imagem, titulo}){
    return (
        <Poster>
            <img src={imagem} alt={titulo}/>
        </Poster>
    )
}

const Poster = styled.div`
    margin: 5px;
    img{
        width: 130px;
        height: 195px;
        padding: 15px;
        border: 1px solid black;
        border-radius: 5px;
    }
`;
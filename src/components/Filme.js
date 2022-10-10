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
        border-radius: 3px;
        box-shadow: 0 2px 4px 2px rgba(0,0,0,0.3);
        :hover{
            opacity: 0.8;
            background-color: #ddd;
        }

    }
`;
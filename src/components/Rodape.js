import styled from "styled-components"

export default function Rodape({filme, horario, dia}){
    return(<LayoutRodape>
        <img src={filme.posterURL} alt={filme.title}/>
        <Textos>
            <h1>{filme.title}</h1>

            {dia ?

                <h1>{dia} - {horario} </h1>
            :
            <></>
            }
            
        </Textos>

    </LayoutRodape>)
}

const LayoutRodape = styled.div`
    width: 375px;
    height:100px;
    background-color: #C3CFD9;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
    position: fixed;
    bottom: 0;
    left: 0;
    
    img{
        height: 100%;
        aspect-ratio: 3/4;
        
    }

`
const Textos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`
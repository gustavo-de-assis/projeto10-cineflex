import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sessao({ weekday, date, showtimes }) {



    return (<LayoutSessao>
        <p>{weekday}, {date}</p>
        <div>
            <Horarios>
                {showtimes.map((h) =>
                    <Link to={`/assentos/${h.id}`}>
                        <Horario>
                            {h.name}
                        </Horario>
                    </Link>
                )}
            </Horarios>
        </div>
    </LayoutSessao>)
}
const LayoutSessao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 5px;
    p{
        margin-bottom: 5px;
    }
    
`
const Horarios = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 15px;
`

const Horario = styled.div`
    width: 140px;
    height: 50px;

    border: 3px solid #3344cc;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ee9955;   

    :hover{
        opacity: 0.7;
    }
`
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sessao({ weekday, date, showtimes}) {



    return (<>
        <p>{weekday}, {date}</p>
        <div>
            <Horarios>
                {showtimes.map((h) => <Horario>
                    <Link to={`/assentos/${h.id}`}>
                        {h.name}
                    </Link>
                </Horario>)}
            </Horarios>
        </div>
    </>)
}

const Horarios = styled.div`
    display: flex;
    flex-direction: row;
`

const Horario = styled.button`
    width: 150px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;

    margin: 15px;
`
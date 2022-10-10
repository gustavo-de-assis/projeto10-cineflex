import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Assento from "./Assento";
import Rodape from "./Rodape";

export default function Assentos({infoFinalizado, setInfoFinalizado}) {
    const [assentos, setAssentos] = useState([]);
    const { idSessao } = useParams();
    const [escolhidos, setEscolhidos] = useState([]);
    /* const [numAssentos, setNumAssentos] = useState([]); */
    const [comprador, setComprador] = useState("");
    const [cpfComprador, setCpfComprador] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
        axios.get(URL).then((ans) => {
            const resposta = ans.data;
            setAssentos(resposta);
            setInfoFinalizado({...infoFinalizado, filme:resposta.movie.title, horario:resposta.name, data:resposta.day.date })
        }).catch((err) => { alert(err.response.data.message) })
    }, []);

    if (assentos.length === 0) {
        return (<>
            Carregando...
        </>)
    }

    function reservaAssentos(e) {
        e.preventDefault();
        if (escolhidos.length === 0) {
            alert("Por favor, escolha pelo menos 1 assento");
            return;
        }
        else {
            const solicitacao = {
                ids: escolhidos,
                name: comprador,
                cpf: cpfComprador
            }

            const infoSessao = {...infoFinalizado,
                 nome: solicitacao.name,
                cpf: solicitacao.cpf}
            
            setInfoFinalizado(infoSessao);

            console.log(infoSessao);

            const URL = `https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`;
            axios.post(URL, solicitacao).then((ans) => {
                //enviar dados para a pag final
                navigate("/ingresso")
            }).catch((err) => {
                 console.log(err.response.data) 
            })

        }
    }


    return (
        <>
            <LayoutAssentos>
                <h1>Selecione o(s) assento(s)</h1>
                <ul>
                    {assentos.seats.map((a) => <Assento
                        key={a.id}
                        id={a.id}
                        isAvailable={a.isAvailable}
                        name={a.name}
                        escolhidos={escolhidos}
                        setEscolhidos={setEscolhidos}
                        infoFinalizado={infoFinalizado}
                        setInfoFinalizado={setInfoFinalizado}
                    />)}
                </ul>
                <LegendaAssentos>
                    <div>
                        <p>Selecionado</p>
                        <Cadeira color={'#55ee66'} />
                    </div>
                    <div>
                        <p>Disponivel</p>
                        <Cadeira color={'#3546ee'} />

                    </div>
                    <div>
                        <p>Indisponivel</p>
                        <Cadeira color={'#dd0033'} />
                    </div>
                </LegendaAssentos>
            </LayoutAssentos>

            <Formulario>
                <form onSubmit={reservaAssentos}>
                    <div>
                        <label >Nome do Comprador</label>
                        <input
                            name="name"
                            onChange={e => setComprador(e.target.value)}
                            required></input>
                    </div>
                    <div>
                        <label>CPF do Comprador</label>
                        <input
                            id="CPF"
                            name="cpf"
                            onChange={e => setCpfComprador(e.target.value)}
                            required>
                        </input>
                    </div>
                    <button type="submit">Reservar Assentos</button>
                </form>
            </Formulario>

            <Rodape filme={assentos.movie} horario={assentos.name} dia={assentos.day.weekday}/>

        </>
    )
}

const LayoutAssentos = styled.div`
    width: 375px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin: 10px;
    }
    ul{
        width: 80%;
        display: flex;
        flex-flow: row wrap;
        margin: 5px;
        gap: 10px;
    }
`
const LegendaAssentos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 5px;
    margin: 20px 0;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

`
const Cadeira = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    
    background-color: ${props => props.color === "" ? '' : props.color};
`

const Formulario = styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div{
            width: 300px;
            height: 60px;
            display: flex;
            flex-direction: column;
            margin: 5px;
        }
        button{
            width: 140px;
            height: 50px;

            border: 1px solid #7777cc;
            border-radius: 15px;

            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ee9955;   

            :hover{
                opacity: 0.7;
            }
        }
    }
`
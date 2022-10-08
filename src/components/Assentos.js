import styled from "styled-components";

export default function Assentos(){
    const assentos = [];

    for(let i = 1; i <= 50; i++){
        assentos.push(i);
    }

    
    return(
        <LayoutAssentos>
            <h1>Selecione o(s) assento(s)</h1>
            <ul>
                {assentos.map((item, i)=> <Assento>{item}</Assento>)}          
            </ul>
            
            <LegendaAssentos>
                <div>
                    <p>Selecionado</p>
                    <Assento style={{ background: "#33cc44"}} />
                </div>
                <div>
                    <p>Disponivel</p>
                    <Assento />

                </div>
                <div>
                    <p>Indisponivel</p>
                    <Assento style={{ background: "#cc3344"}} />
                </div>
            </LegendaAssentos>

            <form>
                <label >Nome do Comprador</label>
                <input name="name"></input>
                <label>CPF</label>
                <input id="CPF" name="cpf"></input>
             
            </form>
            

        </LayoutAssentos>
    )
}

const LayoutAssentos = styled.div`
    width: 375px;
    height: 880px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
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
    align-items: center;
    justify-content: space-between;

    margin: 5px;
    padding: 5px;

    gap: 5px;

`
const Assento = styled.li`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: #ccaabb;

    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
`
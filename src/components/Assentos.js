import styled from "styled-components";

export default function Assentos(){

    return(
        <LayoutAssentos>
            <h1>Selecione o(s) assento(s)</h1>
            <ul>
                <Assento>1</Assento>
                <Assento>2</Assento>
                <Assento>3</Assento>
                <Assento>4</Assento>
                <Assento>5</Assento>
                <Assento>6</Assento>
                <Assento>7</Assento>
                <Assento>8</Assento>
                <Assento>9</Assento>
                <Assento>1</Assento>
                <Assento>2</Assento>
                <Assento>3</Assento>
                <Assento>4</Assento>
                <Assento>5</Assento>
                <Assento>6</Assento>
                <Assento>7</Assento>
                <Assento>8</Assento>
                <Assento>9</Assento>
                <Assento>1</Assento>
                <Assento>2</Assento>
                <Assento>3</Assento>
                <Assento>4</Assento>
                <Assento>5</Assento>
                <Assento>6</Assento>
                <Assento>7</Assento>
                <Assento>8</Assento>
                <Assento>9</Assento>                
            </ul>

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
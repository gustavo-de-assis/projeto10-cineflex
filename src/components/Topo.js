import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Topo() {
    return (

        <ItemTopo>
            CINEFLEX
        </ItemTopo>

    );
}

const ItemTopo = styled.div`
    width: 375px;
    height: 75px;
    background-color: #C3CFD9;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #E8833A;
    font-size: 50px;

`
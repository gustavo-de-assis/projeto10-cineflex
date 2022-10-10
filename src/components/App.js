import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/GlobalStyle";

import Assentos from "./Assentos";
import Catalogo from "./Catalogo";
import Finalizar from "./Finalizar";
import Sessoes from "./Sessoes";
import Topo from "./Topo"


export default function App() {
    const [infoFinalizado, setInfoFinalizado] = useState({filme:"", data:"", horario:"",assentos:[],nome:"", cpf: "" });

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Link to='/'>
                <Topo />
            </Link>
            <Routes>
                <Route path="/" element={<Catalogo />} />
                <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                <Route path="/assentos/:idSessao" element={<Assentos infoFinalizado={infoFinalizado} setInfoFinalizado={setInfoFinalizado}/>} />
                <Route path="/ingresso" element={<Finalizar infoFinalizado={infoFinalizado}/>} />
            </Routes>
        </BrowserRouter>
    );
}
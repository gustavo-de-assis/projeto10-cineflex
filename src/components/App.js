import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/GlobalStyle";

import Assentos from "./Assentos";
import Catalogo from "./Catalogo";
import Finalizar from "./Finalizar";
import Sessoes from "./Sessoes";
import Topo from "./Topo"


export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Topo/>
            <Routes>
                <Route path="/" element={<Catalogo/>} />
                <Route path="/sessoes" element={<Sessoes/> } />
                <Route path="/assentos" element={<Assentos/> } />
                <Route path="/ingresso" element={<Finalizar/>} />
            </Routes>
        </BrowserRouter>
    );
}
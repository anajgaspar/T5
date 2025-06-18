import { useState } from "react";
import NavbarCompleta from "../components/NavbarCompleta";
import ListagemClientes from "../components/ListagemClientes";
import FormCadastroCliente from "../components/FormCadastroCliente";
import "../styles/clientes.css";

export default function Clientes() {
    const [modalVisivel, setModalVisivel] = useState(false);

    const abrirModal = () => {
        setModalVisivel(true);
    };

    const fecharModal = () => {
        setModalVisivel(false);
    };

    return (
        <>
            <NavbarCompleta rota="/" />
            <div id="titulo" className="container-md d-flex justify-content-between align-items-center">
                <h3>Clientes</h3>
                <div>
                    <button id="botao" className="rounded rounded-full" onClick={abrirModal}>Cadastrar Cliente</button>
                </div>
            </div>
            <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                <ListagemClientes nome="Lavínia" cpf="123456789" telefone="987654321" />
                <ListagemClientes nome="João" cpf="987654321" telefone="912345678" />
                <ListagemClientes nome="Marina" cpf="456789123" telefone="998877665" />
                <ListagemClientes nome="Thiago" cpf="321654987" telefone="911223344" />
                <ListagemClientes nome="Beatriz" cpf="789123456" telefone="934561278" />
                <ListagemClientes nome="Lucas" cpf="159753486" telefone="945612378" />
                <ListagemClientes nome="Aline" cpf="951357852" telefone="986543210" />
                <ListagemClientes nome="Caio" cpf="753951456" telefone="923456789" />
                <ListagemClientes nome="Isadora" cpf="852456789" telefone="912398765" />
                <ListagemClientes nome="Fernando" cpf="147258369" telefone="909876543" />
            </ul>
            {modalVisivel && (
                <div className="modal-cadastro">
                    <div className="modal-conteudo">
                        <span className="botao-fechar-modal" onClick={fecharModal}>&times;</span>
                        <h4 style={{ color: '#F39C12' }}>Cadastro de Cliente</h4>
                        <FormCadastroCliente />
                    </div>
                </div>
            )}
        </>
    );
}

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
                <ListagemClientes nome="Lavínia Piratello Pansutti dos Anjos" cpf="123.456.789-00" telefone="98765-4321" />
                <ListagemClientes nome="João Silva Pereira" cpf="425.201.360-73" telefone="91234-5678" />
                <ListagemClientes nome="Marina Souza Oliveira" cpf="096.049.660-22" telefone="99887-7665" />
                <ListagemClientes nome="Thiago Lima Santos" cpf="895.598.780-34" telefone="91122-3344" />
                <ListagemClientes nome="Beatriz Fernandes Almeida" cpf="669.482.030-51" telefone="93456-1278" />
                <ListagemClientes nome="Lucas Pereira Costa" cpf="840.253.880-06" telefone="94561-2378" />
                <ListagemClientes nome="Aline Santos Ribeiro" cpf="399.900.290-59" telefone="98654-3210" />
                <ListagemClientes nome="Caio Lima Moreira" cpf="776.427.200-09" telefone="92345-6789" />
                <ListagemClientes nome="Isadora Martins Rocha" cpf="736.838.840-53" telefone="91239-8765" />
                <ListagemClientes nome="Fernando Almeida Cardoso" cpf="313.429.820-10" telefone="90987-6543" />
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

import NavbarCompleta from "../components/NavbarCompleta";
import FormCadastroPet from "../components/FormCadastroPet";
import ListagemPets from "../components/ListagemPets";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/perfilCliente.css";
import { useState } from "react";

export default function PerfilCliente() {
    const [modalVisivel, setModalVisivel] = useState(false);
    
    const abrirModal = () => {
        setModalVisivel(true);
    };

    const fecharModal = () => {
        setModalVisivel(false);
    };

    return (
        <>
            <NavbarCompleta rota="/clientes"></NavbarCompleta>
            <div className="container-lg py-5">
                <div className="d-flex flex-column justify-content-center">
                    <div className="mb-4">
                        <div className="card card-body">
                            <h4 id="enfase" className="card-title">Nome: Lavínia Piratello Pansutti dos Anjos</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Nome Social: Lavínia</h6>
                            <p className="mb-1"><strong>CPF:</strong> 123.456.789-00</p>
                            <p className="mb-3"><strong>RG:</strong> 12.345.678-9</p>
                            <h6 id="enfase" className="mt-3">Telefones:</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">+55 12 98765-4321</li>
                                <li className="list-group-item">+55 12 99876-5432</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-md d-flex justify-content-end align-items-center pb-4">
                        <button id="botao" className="rounded rounded-full" onClick={abrirModal}>Cadastrar Pet</button>
                    </div>
                    {modalVisivel && (
                        <div className="modal-cadastro">
                            <div className="modal-conteudo">
                                <span className="botao-fechar-modal" onClick={fecharModal}>&times;</span>
                                <h4 style={{ color: '#F39C12' }}>Cadastro de Pet</h4>
                                <FormCadastroPet />
                            </div>
                        </div>
                    )}
                    <div className="mb-4">
                        <div className="card card-body p-4">
                            <h4 id="enfase" className="card-title">Pets:</h4>
                            <ul className="list-group list-group-flush mb-3">
                                <ListagemPets nome="Yuumi" raca="Siamês" genero="Fêmea" tipo="Gato" ></ListagemPets>
                                <ListagemPets nome="Lily" raca="SRD" genero="Fêmea" tipo="Gato"></ListagemPets>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

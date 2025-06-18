import { useState } from "react";
import NavbarCompleta from "../components/NavbarCompleta";
import ListagemPets from "../components/ListagemPets";
import FormCadastroPet from "../components/FormCadastroPet";
import "../styles/clientePets.css";

export default function ClientePets() {
    const [modalVisivel, setModalVisivel] = useState(false);

    const abrirModal = () => {
        setModalVisivel(true);
    };

    const fecharModal = () => {
        setModalVisivel(false);
    };

    return (
        <>
            <NavbarCompleta rota="/clientes" />
            <div id="titulo" className="container-md d-flex justify-content-between align-items-center">
                <h3>Lavínia - Pets</h3>
                <div>
                    <button id="botao" className="rounded rounded-full" onClick={abrirModal}>Cadastrar Pet</button>
                </div>
            </div>
            <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                <ListagemPets nome="Yuumi" raca="Gato Siamês" genero="Fêmea" />
                <ListagemPets nome="Lily" raca="Gato SRD" genero="Fêmea" />
            </ul>
            {modalVisivel && (
                <div className="modal-cadastro">
                    <div className="modal-conteudo">
                        <span className="botao-fechar-modal" onClick={fecharModal}>&times;</span>
                        <h4 style={{ color: '#F39C12' }}>Cadastro de Pet</h4>
                        <FormCadastroPet />
                    </div>
                </div>
            )}
        </>
    );
}

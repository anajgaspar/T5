import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { excluirPet } from "../api/petsApi";

type Pet = {
    id?: number,
    nome: string,
    tipo: string,
    raca: string,
    genero: string,
    clienteId: number
}

type Props = {
    pet: Pet
    onAtualizar: () => void,
    onEditar: (pet: Pet) => void;
}

export default function ListagemPets ({ pet, onAtualizar, onEditar}: Props) {
    const handleDelete = async () => {
        if (pet.id) {
            const confirmar = window.confirm("Você tem certeza que deseja excluir este pet?");
            if (!confirmar) return;

            try {
                await excluirPet(pet.id);
                onAtualizar();
            } catch (error) {
                console.error("Erro ao excluir pet:", error);
            }
        }
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center gap-4 flex-wrap">
            <div className="d-flex flex-column">
                <p className="mb-1"><strong>Nome:</strong> {pet.nome}</p>
                <p className="mb-1"><strong>Raça:</strong> {pet.raca}</p>
                <p className="mb-1"><strong>Gênero:</strong> {pet.genero}</p>
                <p className="mb-0"><strong>Tipo:</strong> {pet.tipo}</p>
            </div>
            <div className="d-flex gap-4">
                <button className="btn-delUpd" onClick={handleDelete}>
                    <img className="img-fluid" src="https://img.icons8.com/?size=100&id=85081&format=png&color=000000" alt="delete" width={20} />
                </button>
                <button className="btn-delUpd" onClick={() => onEditar(pet)}>
                    <img className="img-fluid" src="https://img.icons8.com/?size=100&id=82744&format=png&color=000000" alt="update" width={20} />
                </button>
            </div>
        </li>
    );
}

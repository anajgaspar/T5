import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/consumo.css";
import NavbarCompleta from "../components/NavbarCompleta";

export default function Consumos() {
    return (
        <>
            <NavbarCompleta rota="/" />
            <div className="container-lg d-flex flex-column gap-2 my-4">
                <h3 id="titulo">Cadastro de Consumo</h3>
                <form className="consumo-form">
                    <div className="form-group">
                        <label htmlFor="cliente-select">Cliente:</label>
                        <select id="cliente-select" className="form-select">
                            <option>Selecione...</option>
                            <option>Lavínia</option>
                            <option>João</option>
                            <option>Marina</option>
                        </select>
                    </div>
                    <div className="consumo-section">
                        <h5>Produtos</h5>
                        <div className="checkbox-list">
                            {[
                            "Ração Premium Cães 10kg",
                            "Areia Higiênica 4kg",
                            "Shampoo Antipulgas",
                            "Brinquedo Mordedor",
                            "Coleira Antipulgas",
                            "Caminha Pequena",
                            "Arranhador para Gatos",
                            "Comedouro Duplo Inox",
                            "Caixa de Transporte Média",
                            "Petisco Natural 300g",
                            ].map((item, index) => (
                            <div key={index} className="form-check">
                                <input type="checkbox" className="form-check-input" id={`produto-${index}`} />
                                <label className="form-check-label" htmlFor={`produto-${index}`}>{item}</label>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="consumo-section">
                        <h5>Serviços</h5>
                        <div className="checkbox-list">
                            {[
                            "Banho e Tosa",
                            "Consulta Veterinária",
                            "Aplicação de Vacina",
                            "Hospedagem (dia)",
                            "Hidratação de Pelagem",
                            "Corte de Unhas",
                            "Limpeza de Ouvidos",
                            "Escovação de Dentes",
                            "Tosa Higiênica",
                            "Nutricionista",
                            ].map((item, index) => (
                            <div key={index} className="form-check">
                                <input type="checkbox" className="form-check-input" id={`servico-${index}`} />
                                <label className="form-check-label" htmlFor={`servico-${index}`}>{item}</label>
                            </div>
                            ))}
                        </div>
                    </div>
                    <button type="submit" id="btn-cadastro" className="rounded rounded-full">Cadastrar Consumo</button>
                </form>
            </div>
        </>
    );
}
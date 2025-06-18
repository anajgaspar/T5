import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/consumo.css";
import NavbarCompleta from "../components/NavbarCompleta";

export default function Consumos() {
    return (
        <>
            <NavbarCompleta rota="/" />
            <div>
                <div id="titulo" className="container-md">
                    <h3>Cadastrar Consumo</h3>
                </div>
                <form className="container-lg d-flex flex-column gap-2 my-4">
                    <div className="mb-3">
                        <label htmlFor="cliente-select" className="form-label">Escolha um cliente:</label>
                        <select id="cliente-select" className="form-select">
                            <option></option>
                            <option>Lavínia</option>
                            <option>João</option>
                            <option>Marina</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-between mt-5 gap-5">
                        <div className="d-flex flex-wrap gap-4 w-50">
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Ração Premium Cães 10kg
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Areia Higiênica 4kg
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Shampoo Antipulgas
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Brinquedo Mordedor
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Coleira Antipulgas
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Caminha Pequena
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Arranhador para Gatos
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Comedouro Duplo Inox
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Caixa de Transporte Média
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Petisco Natural 300g
                            </div>
                        </div>
                        <div className="d-flex flex-wrap gap-4 w-50">
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Banho e Tosa
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Consulta Veterinária
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Aplicação de Vacina
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Hospedagem (dia)
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Hidratação de Pelagem
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Corte de Unhas
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Limpeza de Ouvidos
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Escovação de Dentes
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Tosa Higiênica
                            </div>
                            <div className="mb-3 form-check flex-wrap">
                                <input type="checkbox" className="form-check-input" />
                                Nutricionista
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn mt-5">Cadastrar</button>
                </form>
            </div>
        </>
    );
}

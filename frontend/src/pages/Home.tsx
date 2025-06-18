import CardsHome from "../components/CardsHome";
import "../styles/home.css";
import NavbarLogo from "../components/NavbarLogo";

export default function Home() {
    return (
        <>
            <NavbarLogo />
            <div className="container-fluid">
                <div id="introducao" className="container-md text-center">
                    <h5>Seja bem-vindo(a) ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias!</h5>
                </div>
                <div id="cards" className="container-lg d-flex flex-column align-items-center">
                    <div id="cards-linha-cima" className="row justify-content-center flex-wrap gap-5">
                        <div id="card" className="col-md-3 rounded">
                            <CardsHome
                                icone="https://img.icons8.com/?size=100&id=82751&format=png&color=F39C12"
                                titulo="Clientes"
                                descricao="Gerencie os dados dos clientes e seus respectivos pets."
                                rota="/clientes"
                            />
                        </div>
                        <div id="card" className="col-md-3 rounded">
                            <CardsHome
                                icone="https://img.icons8.com/?size=100&id=85073&format=png&color=F39C12"
                                titulo="Catálogo"
                                descricao="Cadastre e edite seus produtos e serviços disponíveis."
                                rota="/produtos"
                            />
                        </div>
                        <div id="card" className="col-md-3 rounded">
                            <CardsHome
                                icone="https://img.icons8.com/?size=100&id=86550&format=png&color=F39C12"
                                titulo="Consumos"
                                descricao="Gerencie os produtos e serviços utilizados por cada cliente."
                                rota="/consumos"
                            />
                        </div>
                    </div>
                    <div id="card-relatorios" className="align-self-center rounded">
                        <CardsHome
                            icone="https://img.icons8.com/?size=100&id=82742&format=png&color=F39C12"
                            titulo="Relatórios"
                            descricao="Acompanhe os principais indicadores, como vendas e serviços mais utilizados."
                            rota="/relatorios"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

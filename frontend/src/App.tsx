import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import PerfilCliente from './pages/PerfilCliente';
import Produtos from './pages/ProdutosServicos';
import Servicos from './pages/Servicos';
import Consumos from './pages/Consumos';
// import Relatorios from './pages/Relatorios';

export default function App() {
    return (       
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/clientes" element={< Clientes />} />
                <Route path="/cliente/:id" element={<PerfilCliente />} />
                <Route path="/produtos" element={< Produtos />} />
                <Route path="/servicos" element={< Servicos />} />
                <Route path="/consumos" element={<Consumos />} />
                {/* <Route path="/relatorios" element={< Relatorios />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

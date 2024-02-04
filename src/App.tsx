import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styleGlobal from './styles/EstilosGlobais.module.scss'
import Home from './pages/Home'

const App: React.FC = () => {

  return (
    <BrowserRouter>

      {/* Rotas */}
      <Routes>
        <Route index path='/' element={<Home />} />

        {/* Rota de fallback */}
        <Route path='/404' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

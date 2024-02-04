import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './styles/EstilosGlobais.module.scss'

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

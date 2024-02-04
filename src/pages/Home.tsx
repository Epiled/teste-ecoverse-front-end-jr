import { useState } from 'react';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Categorias from '../components/Categorias';
import Produtos from '../components/Produtos';
import Relacionados from '../components/Relacionados';
import Marcas from '../components/Marcas';
import Rodape from '../components/Rodape';
import Modal from '../components/Modal';


const Home: React.FC = () => {

  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto>();
  const [modalAberta, setModal] = useState(false);

  return (
    <>
      <Menu />
      <Banner />
      <Categorias />
      {/* <Produtos
        produtos={produtos}
        selecionaProduto={selecionaProduto}
        onModal={onModal}
      /> */}
      <Relacionados />
      <Marcas />
      {/* {modalAberta && <Modal
        produtoSelecionado={produtoSelecionado}
        offModal={offModal}
      />} */}
      <Rodape />
    </>)
}

export default Home
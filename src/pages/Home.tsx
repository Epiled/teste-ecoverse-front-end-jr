import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Categorias from '../components/Categorias';
import Produtos from '../components/Produtos';
import Relacionados from '../components/Relacionados';
import Marcas from '../components/Marcas';
import Rodape from '../components/Rodape';
import Modal from '../components/Modal';
import { IProduto } from '../interfaces/IProduto';
import { useDadosProdutos } from '../service/useProdutos';

const Home: React.FC = () => {

  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto>();
  const [modalAberta, setModal] = useState(false);

  const { dados } = useDadosProdutos();

  useEffect(() => {
    dados && setProdutos(dados);
  }, [dados])


  function selecionaProduto(produtoSelecionado: IProduto) {
    setProdutoSelecionado(produtoSelecionado);
    setProdutos((produtosAnteriores) => produtosAnteriores.map((produto, index) => ({
      ...produto,
      id: String(index),
      selecionado: produto.id === produtoSelecionado.id ? true : false
    })))
  }

  function onModal() {
    setModal(true);
  }

  function offModal() {
    setModal(false);
  }

  return (
    <>
      <Menu />
      <Banner />
      <Categorias />
      <Produtos
        produtos={produtos}
        selecionaProduto={selecionaProduto}
        onModal={onModal}
      />      
      <Relacionados />
      <Marcas />
      {modalAberta && <Modal
        produtoSelecionado={produtoSelecionado}
        offModal={offModal}
      />}
      <Rodape />
    </>)
}

export default Home
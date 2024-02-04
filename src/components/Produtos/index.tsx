import style from './Produtos.module.scss';
import Parceiro from '../Parceiro';
import Titulo from '../Titulo';
import Produto from './Produto';
import { IProduto } from '../../interfaces/IProduto';
import { useEffect, useRef } from 'react';

interface Props {
  produtos: IProduto[],
  selecionaProduto: (produtoSelecionado: IProduto) => void;
  onModal: (onModal: boolean) => void;
}


const Produtos: React.FC<Props> = ({ produtos, selecionaProduto, onModal }) => {
  const listaRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Aqui você pode acessar e utilizar a listaRef conforme necessário
    console.log(listaRef.current);
  }, [produtos]); // Este efeito será executado apenas uma vez ao montar o componente

  function movePosicaoX(item: any): number {
    console.log(item.current?.getBoundingClientRect())
    return 0
  }

  return (
    <section className={style.produtos}>
      <Titulo>
        Produtos relacionados
      </Titulo>
      <nav className={style.produtos__categorias}>
        <a className={`${style.produtos__categoria} ${style['produtos__categoria--ativo']}`} href="">Celular</a>
        <a className={style.produtos__categoria} href="">Acessórios</a>
        <a className={style.produtos__categoria} href="">Tablets</a>
        <a className={style.produtos__categoria} href="">Notebooks</a>
        <a className={style.produtos__categoria} href="">TVs</a>
        <a className={style.produtos__categoria} href="">Ver todos</a>
      </nav>
      <div className={style.produtos__vitrine}>
        <ul className={style.produtos__wrap} ref={listaRef}>
          {produtos.map((produto, index) => {
            return (
            <Produto
              funcao={() => movePosicaoX(produto)}
              selecionaProduto={selecionaProduto}
              onModal={onModal}
              key={index}
              {...produto}
            />
          )})}
        </ul>
        <div className={style.produtos__setas}>
          <button className={`${style.produtos__seta} ${style['produtos__seta--esq']}`} aria-label='Retroceder lista de produtos'></button>
          <button className={`${style.produtos__seta} ${style['produtos__seta--dir']}`} aria-label='Avançar lista de produtos'></button>
        </div>
      </div>

      <div className={style.produtos__parceiros}>
        <Parceiro titulo={'Parceiros'} />
        <Parceiro titulo={'Parceiros'} />
      </div>
    </section>
  )
}

export default Produtos;
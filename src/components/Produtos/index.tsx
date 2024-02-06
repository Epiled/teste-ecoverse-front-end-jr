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
  const ref = useRef<HTMLUListElement>(null);
  const produtosRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Aqui você pode acessar e utilizar a ref conforme necessário
    //console.log(ref.current);
  }, [produtos]); // Este efeito será executado apenas uma vez ao montar o componente

  function movePosicaoX(item: any): number {
    console.log(item.current?.getBoundingClientRect())
    return 0
  }

  function moverTeste(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const tamanhoListaContainer = ref?.current ? ref.current.getBoundingClientRect().width : 0
    const posicaoListaContainer = ref?.current ? ref.current.offsetLeft : 0
    const sentido = e.currentTarget.dataset.sentido
    let estiloAtual

    produtosRef.current.forEach(produto => {

      if (produto) {
        estiloAtual = getComputedStyle(produto);
        const posicaoXProduto = produto.offsetLeft

        let { valorAtual, larguraProduto } = handlePosition(estiloAtual, produto)

        let novaPosicao = 0;

        if (sentido === 'esq') {
          novaPosicao = valorAtual + larguraProduto
          produto.style.transform = `translateX(${novaPosicao}px)`;
        } else {
          novaPosicao =  valorAtual - larguraProduto
          produto.style.transform = `translateX(${novaPosicao}px)`;
        }

      }
    });
  }

  function handlePosition(estilos: CSSStyleDeclaration, produto: HTMLDivElement) {
    const translateXAtual = estilos?.transform.replace(/[^0-9,-]/g, '');
    const valorAtual = translateXAtual ? parseFloat(translateXAtual.split(',')[4].trim()) : 0;
    const larguraProduto = produto.getBoundingClientRect().width

    return { valorAtual, larguraProduto }
  }


  const handleAllRef = (el: HTMLDivElement | null, index: number) => {
    produtosRef.current[index] = el;
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
        <ul className={style.produtos__wrap} ref={ref}>
          {produtos.map((produto, index) => {
            return (
              <Produto
                innerRef={(el) => handleAllRef(el, index)}
                funcao={() => movePosicaoX(produto)}
                selecionaProduto={selecionaProduto}
                onModal={onModal}
                key={index}
                {...produto}
              />
            )
          })}
        </ul>

        <div className={style.produtos__setas}>
          <button
            onClick={(e) => { moverTeste(e) }}
            data-sentido='esq'
            className={`${style.produtos__seta} ${style['produtos__seta--esq']}`}
            aria-label='Retroceder lista de produtos'>
          </button>
          <button
            onClick={(e) => { moverTeste(e) }}
            data-sentido='dir'
            className={`${style.produtos__seta} ${style['produtos__seta--dir']}`}
            aria-label='Avançar lista de produtos'>
          </button>
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
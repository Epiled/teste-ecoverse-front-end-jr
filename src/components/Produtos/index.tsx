import style from './Produtos.module.scss';
import Parceiro from '../Parceiro';
import Titulo from '../Titulo';
import Produto from './Produto';
import { IProduto } from '../../interfaces/IProduto';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  produtos: IProduto[],
  selecionaProduto: (produtoSelecionado: IProduto) => void;
  onModal: (onModal: boolean) => void;
}

const Produtos: React.FC<Props> = ({ produtos, selecionaProduto, onModal }) => {
  const ref = useRef<HTMLUListElement | null>(null);
  const produtosRef = useRef<Array<React.RefObject<HTMLLIElement>>>([]);

  const [animando, setAnimando] = useState(false);
  const containerTamanho = ref.current?.getBoundingClientRect().width || 0;

  // Carroussel função e regras
  function moverItens(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (animando) return; // Evita cliques durante a animação
    setAnimando(true);
    const sentido = e.currentTarget.dataset.sentido;
    let estiloAtual;
    let valorAtual = 0;
    let larguraProduto = 0;
    
    const produtoRefPrimeiro = produtosRef.current[0].current;
    const produtoRefPrimeiroPosition = produtoRefPrimeiro?.getBoundingClientRect().x || 0;

    const produtoRefUltimo = produtosRef.current.at(-1)?.current;
    const produtoRefUltimoPosition = produtoRefUltimo?.getBoundingClientRect().x || 0

    if (produtoRefPrimeiro) {
      estiloAtual = getComputedStyle(produtoRefPrimeiro);
      ({ valorAtual, larguraProduto } = handlePosition(estiloAtual, produtoRefPrimeiro));
    }

    produtosRef.current.forEach(produtoRef => {
      const produto = produtoRef.current;
      if (produto) {
        estiloAtual = getComputedStyle(produto);

        let novaPosicao = 0;

        if (sentido === 'esq') {
          if (produtoRefPrimeiroPosition >= 0) return
          novaPosicao = valorAtual + larguraProduto
          produto.style.transform = `translateX(${novaPosicao}px)`;
        } else {
          if (produtoRefUltimoPosition <= (containerTamanho - larguraProduto)) return
          novaPosicao = valorAtual - larguraProduto
          produto.style.transform = `translateX(${novaPosicao}px)`;
        }
      }
    });

    setTimeout(() => {
      setAnimando(false);
    }, 500); // Ajuste o tempo conforme necessário para a duração da animação
  }

  // Função Auxiliar do carroussel para coletar alguns valores
  function handlePosition(estilos: CSSStyleDeclaration, produto: HTMLLIElement) {
    const translateXAtual = estilos?.transform.replace(/[^0-9,-]/g, '');
    const valorAtual = translateXAtual ? parseFloat(translateXAtual.split(',')[4].trim()) : 0;
    const larguraProduto = produto.getBoundingClientRect().width

    return { valorAtual, larguraProduto }
  }

  return (
    <section className={style.produtos}>
      <Titulo>
        Produtos relacionados
      </Titulo>

      <nav className={style.produtos__categorias}>
        <Link to={'/'} className={`${style.produtos__categoria} ${style['produtos__categoria--ativo']}`}>Celular</Link>
        <Link to={'/'} className={style.produtos__categoria}>Acessórios</Link>
        <Link to={'/'} className={style.produtos__categoria}>Tablets</Link>
        <Link to={'/'} className={style.produtos__categoria}>Notebooks</Link>
        <Link to={'/'} className={style.produtos__categoria}>TVs</Link>
        <Link to={'/'} className={style.produtos__categoria}>Ver todos</Link>
      </nav>

      <div className={style.produtos__vitrine}>
        <ul className={style.produtos__wrap} ref={ref}>
          {produtos.map((produto, index) => {
            produtosRef.current[index] = React.createRef();

            return (
              <Produto
                index={index}
                key={index}
                ref={produtosRef.current[index]}
                selecionaProduto={selecionaProduto}
                onModal={onModal}
                {...produto}
              />
            )
          })}
        </ul>

        <div className={style.produtos__setas}>
          <button
            onClick={(e) => { moverItens(e) }}
            data-sentido='esq'
            className={`${style.produtos__seta} ${style['produtos__seta--esq']}`}
            aria-label='Retroceder lista de produtos'>
          </button>
          <button
            onClick={(e) => { moverItens(e) }}
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
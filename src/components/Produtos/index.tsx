import style from './Produtos.module.scss';
import Parceiro from '../Parceiro';
import Titulo from '../Titulo';
import Produto from './Produto';
import { IProduto } from '../../interfaces/IProduto';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorFeedBack from '../ErrorFeedBack';
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
  const containerX = ref.current?.getBoundingClientRect().x || 0;
  const containerXEnd = containerX + containerTamanho;
  const containerEstilos = ref?.current ? window.getComputedStyle(ref.current) : 0;
  const containerGap = containerEstilos ? parseFloat(containerEstilos.gap) : 0;

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
        const deslocamentoBase = larguraProduto + containerGap;

        if (sentido === 'esq') {
          const foraDoContainer = produtoRefPrimeiroPosition - containerX;

          if (foraDoContainer >= 0) return;

          novaPosicao = valorAtual + deslocamentoBase;
          produto.style.transform = `translateX(${novaPosicao}px)`;
          const posicaoAlterada = produto.getBoundingClientRect().x + deslocamentoBase
          checkInArea(produto, posicaoAlterada);
        } else {
          if (produtoRefUltimoPosition <= (containerXEnd - larguraProduto)) return

          novaPosicao = valorAtual - deslocamentoBase;
          produto.style.transform = `translateX(${novaPosicao}px)`;
          const posicaoAlterada = produto.getBoundingClientRect().x - deslocamentoBase
          checkInArea(produto, posicaoAlterada);
        }
      }

    });

    // Intervalo para pressionar o botão novamente
    setTimeout(() => {
      setAnimando(false);
    }, 500); // Ajuste o tempo conforme necessário para a duração da animação
  }

  function checkInArea(produto: HTMLLIElement, posicaoAtual: number) {
    if (posicaoAtual >= containerX && posicaoAtual < containerXEnd) {
      produto.dataset.visible = "true";
    } else {
      produto.dataset.visible = "false";
    }
  }

  // Função Auxiliar do carroussel para coletar alguns valores
  function handlePosition(estilos: CSSStyleDeclaration, produto: HTMLLIElement) {
    const translateXAtual = estilos?.transform.replace(/[^0-9,-]/g, '');
    const valorAtual = translateXAtual ? parseFloat(translateXAtual.split(',')[4].trim()) : 0;
    const larguraProduto = produto.getBoundingClientRect().width

    return { valorAtual, larguraProduto }
  }

  const [hasProduct, setHasProduct] = useState(false);

  useEffect(() => {
    produtosRef.current.forEach(produtoRef => {
      const produto = produtoRef.current;
      if (produto) {
        const posicaoAtual = produto.getBoundingClientRect().x;
        checkInArea(produto, posicaoAtual);
        setHasProduct(true)
      }
    });
  }, [produtos]);


  useEffect(() => {
    if (produtos.length > 0) {
      setHasProduct(true); // Se houver produtos, atualiza hasProduct para true
    } else {
      setHasProduct(false); // Se não houver produtos, define hasProduct como false
    }
  }, [produtos]);

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
                {...produto} />
            );
          })}
        </ul>
        <div className={style.produtos__setas}>
          <button
            onClick={(e) => { moverItens(e); }}
            data-sentido='esq'
            className={`${style.produtos__seta} ${style['produtos__seta--esq']}`}
            aria-label='Retroceder lista de produtos'>
          </button>
          <button
            onClick={(e) => { moverItens(e); }}
            data-sentido='dir'
            className={`${style.produtos__seta} ${style['produtos__seta--dir']}`}
            aria-label='Avançar lista de produtos'>
          </button>
        </div>

        {!hasProduct && <ErrorFeedBack />}

      </div>

      <div className={style.produtos__parceiros}>
        <Parceiro titulo={'Parceiros'} />
        <Parceiro titulo={'Parceiros'} />
      </div>
    </section>
  )
}

export default Produtos;
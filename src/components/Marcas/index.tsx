import Titulo from "../Titulo";
import style from './Marcas.module.scss';
import Marca from "./Marca";
import { useRef, useState } from "react";

const Marcas: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const produtosRef = useRef<Array<React.RefObject<HTMLAnchorElement>>>([]);

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
          moverElementos(produto, novaPosicao, deslocamentoBase);
        } else {
          if (produtoRefUltimoPosition <= (containerXEnd - larguraProduto)) return
          novaPosicao = valorAtual - deslocamentoBase;
          moverElementos(produto, novaPosicao, deslocamentoBase);
        }
      }

    });

    // Intervalo para pressionar o botão novamente
    setTimeout(() => {
      setAnimando(false);
    }, 500); // Ajuste o tempo conforme necessário para a duração da animação
  }

  function moverElementos(produto:HTMLAnchorElement, novaPosicao: number, deslocamentoBase: number) {
    produto.style.transform = `translateX(${novaPosicao}px)`;
    const posicaoAlterada = produto.getBoundingClientRect().x + deslocamentoBase;
    checkInArea(produto, posicaoAlterada);
  }

  function checkInArea(produto: HTMLAnchorElement, posicaoAtual: number) {
    if (posicaoAtual >= containerX && posicaoAtual < containerXEnd) {
      produto.dataset.visible = "true";
    } else {
      produto.dataset.visible = "false";
    }
  }

  // Função Auxiliar do carroussel para coletar alguns valores
  function handlePosition(estilos: CSSStyleDeclaration, produto: HTMLAnchorElement) {
    const translateXAtual = estilos?.transform.replace(/[^0-9,-]/g, '');
    const valorAtual = translateXAtual ? parseFloat(translateXAtual.split(',')[4].trim()) : 0;
    const larguraProduto = produto.getBoundingClientRect().width

    return { valorAtual, larguraProduto }
  }


  return (
    <section className={style.marcas}>
      <Titulo alt={true}>
        Navegue por marcas
      </Titulo>

      <div className={style.marcas__carrousel} ref={ref}>
        {Array.from({ length: 8 }, (_, index) => {
          const ref = React.createRef<HTMLAnchorElement>();
          produtosRef.current[index] = ref;

          return <Marca key={index} ref={ref} />;
        })}

        <button
          className={style.marcas__avancar}
          aria-label="Botão de avançar marcas"
          onClick={(e) => { moverItens(e) }}
          data-sentido='dir'
          >  
        </button>
      </div>
    </section>
  )
}

export default Marcas;
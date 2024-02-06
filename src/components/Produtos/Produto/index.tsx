import style from './Produto.module.scss';
import produtoImagem from '../../../assets/img/mobile.png';
import { IProduto } from '../../../interfaces/IProduto';
import React, { useRef } from 'react';

interface Props extends IProduto {
  selecionaProduto: (produtoSelecionado: IProduto) => void;
  onModal: (onModal: boolean) => void;
  funcao: (item: any) => void;
  innerRef?: (el: HTMLDivElement | null) => void;
}

const Produto: React.FC<Props> = (
  {
    descriptionShort,
    photo,
    price,
    productName,
    id,
    produtoSelecionado,
    selecionaProduto,
    onModal,
    funcao,
    innerRef
  }) => {

  const produtoRef = useRef<HTMLLIElement>(null);

  // Adicione um console.log sempre que o componente Produto for renderizado
  //console.log('Novo Produto criado:', produtoRef.current?.getBoundingClientRect());

  const handleClick = () => {
    const boundingBox = produtoRef.current?.getBoundingClientRect().x;
    console.log(boundingBox);
    funcao(boundingBox);
  };

  return (
    <li 
    className={style.produto}
     onClick={handleClick}
     ref={innerRef}
     >
      <img className={style.produto__imagem} src={photo} alt="" />
      <h3 className={style.produto__titulo}>
        {descriptionShort}
      </h3>

      <span className={style.produto__valorAntigo}>R$ {(price + (price * 0.0647)).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
      <span className={style.produto__valor}>R$ {price.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
      <span className={style.produto__parcelas}>ou 2x de R$ {(price / 2).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')} sem juros</span>
      <span className={style.produto__frete}>Frete grátis</span>

      <button
        className={style.produto__btn}
        type='button'
        onClick={() => {
          selecionaProduto({
            descriptionShort,
            photo,
            price,
            productName,
            id,
            produtoSelecionado,
          });
          onModal(true)
        }
        }>
        Comprar
      </button>
    </li >
  )
}

export default Produto;
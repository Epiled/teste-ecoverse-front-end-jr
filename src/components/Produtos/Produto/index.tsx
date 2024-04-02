import style from './Produto.module.scss';
import { IProduto } from '../../../interfaces/IProduto';
import { ForwardedRef, forwardRef } from 'react';

interface Props extends IProduto {
  selecionaProduto: (produtoSelecionado: IProduto) => void;
  onModal: (onModal: boolean) => void;
  index: number;
}

const formatValue = (value: number) => {
  const valueFormated = value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return valueFormated;
}

const Produto = forwardRef(
  ({
    descriptionShort,
    photo,
    price,
    productName,
    id,
    produtoSelecionado,
    selecionaProduto,
    onModal,
    index,
  }: Props, ref: ForwardedRef<HTMLLIElement>) => {

    return (
      <li
        className={style.produto}
        ref={ref}
        key={index}
        data-visible="true"
      >
        <img className={style.produto__imagem} src={photo} width={247} height={228} alt="#" />
        <h3 className={style.produto__titulo}>
          {descriptionShort}
        </h3>

        <span className={style.produto__valorAntigo}>
          R$ {formatValue(price + (price * 0.0647))}
        </span>
        <span className={style.produto__valor}>
          R$ {formatValue(price)}
        </span>
        <span className={style.produto__parcelas}>
          ou 2x de R$ {formatValue(price / 2)}
          sem juros
        </span>
        <span className={style.produto__frete}>
          Frete grátis
        </span>

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
)


export default Produto;
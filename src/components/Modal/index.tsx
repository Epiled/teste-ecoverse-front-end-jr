import { IProduto } from '../../interfaces/IProduto'
import style from './Modal.module.scss'
import foto from '../../assets/img/mobile.png'


function Modal(
  { produtoSelecionado, offModal }:
  { produtoSelecionado?: IProduto, offModal: (onModal: boolean) => void }) {

  return (
    <aside className={style.modal}>
      <div className={style.modal__box}>
        <div className={`${style.modal__container} ${style['modal__container--imagem']}`}>
          <img src={foto} className={style.modal__imagem} alt="" />
        </div>
        <div className={style.modal__container}>
          <h3 className={style.modal__titulo}>
            {produtoSelecionado?.productName}
          </h3>
          <span className={style.modal__preco}>
            R$ {produtoSelecionado?.price.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </span>
          <p className={style.modal__txt}>
            {produtoSelecionado?.descriptionShort}

          </p>
          <span className={style.modal__extra}>
            Veja mais detalhes do produto
          </span>
          <div className={style.modal__ipts}>
            <button className={style.modal__dec}>-</button>
            <input className={style.modal__qtd} type="number" name="" id="modalQuantidade" />
            <button className={style.modal__acre}>+</button>
          </div>
          <button className={style.modal__btn}>
            Comprar
          </button>
        </div>
        <button className={style.modal__close} onClick={() => offModal(false)}>X</button>
      </div>
    </aside>
  )
}

export default Modal;
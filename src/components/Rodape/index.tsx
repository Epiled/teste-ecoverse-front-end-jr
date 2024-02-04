import style from './Rodape.module.scss';
import alelo from '../../assets/svg/formas-de-pagamento/alelo.svg';
import amex from '../../assets/svg/formas-de-pagamento/amex.svg';
import dinners from '../../assets/svg/formas-de-pagamento/dinners.svg';
import elo from '../../assets/svg/formas-de-pagamento/elo.svg';
import ifood from '../../assets/svg/formas-de-pagamento/ifood.svg';
import mastercard from '../../assets/svg/formas-de-pagamento/mastercard.svg';
import pix from '../../assets/svg/formas-de-pagamento/pix.svg';
import sodexo from '../../assets/svg/formas-de-pagamento/sodexo.svg';
import ticket from '../../assets/svg/formas-de-pagamento/ticket.svg';
import visa from '../../assets/svg/formas-de-pagamento/visa.svg';
import rodapeImagem from '../../assets/svg/rodape__imagem.svg';
import Botao from '../Botao';

function Rodape() {
  return (
    <footer className={style.rodape}>
      <div className={style.rodape__wrap}>
        <section>
          <h4 className={`${style.rodape__titulo} ${style['rodape__titulo--alt']}`}>Sobre nós</h4>
          <div className={style.rodape__links}>
            <a className={style.rodape__link} href="">Conheça</a>
            <a className={style.rodape__link} href="">Como Comprar</a>
            <a className={style.rodape__link} href="">Indicação e Desconto</a>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </section>

        <section>
          <h4 className={style.rodape__titulo}>Informações Úteis</h4>
          <div className={style.rodape__links}>
            <a className={style.rodape__link} href="">Fale Conosco</a>
            <a className={style.rodape__link} href="">Dúvidas</a>
            <a className={style.rodape__link} href="">Prazos de entrega</a>
            <a className={style.rodape__link} href="">Formas de pagamento</a>
            <a className={style.rodape__link} href="">Política de privacidade</a>
            <a className={style.rodape__link} href="">Trocas e devoluções</a>
          </div>
        </section>

        <aside>
          <h4 className={style.rodape__titulo}>Formas de Pagamento</h4>

          <div className={style.rodape__pagamentos}>
            <img src={visa} alt="" />
            <img src={elo} alt="" />
            <img src={alelo} alt="" />
            <img src={dinners} alt="" />
            <img src={ifood} alt="" />
            <img src={mastercard} alt="" />
            <img src={pix} alt="" />
            <img src={amex} alt="" />
            <img src={ticket} alt="" />
            <img src={sodexo} alt="" />
          </div>
        </aside>

        <aside className={style.rodape__letter}>
          <h4 className={`${style.rodape__titulo} ${style['rodape__titulo--letter']}`}>
            Cadastre-se e Receba nossas
            <span className={style.rodape__destaque}>novidades e promoções</span>
          </h4>
          <p className={style.rodape__txt}>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum
          </p>
          <form className={style.rodape__formulario} action="">
            <input className={style.rodape__ipt} placeholder='Seu e-mail' type="email" name="" id="" />
            <Botao ancora='#'>
              Ok
            </Botao>
          </form>
        </aside>
      </div>

      <div className={style.rodape__copyright}>
        <div className={`${style.rodape__wrap} ${style['rodape__wrap--alt']}`}>
          <p className={style.rodape__copy}>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
            É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
          </p>
          <img className={style.rodape__imagem} src={rodapeImagem} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Rodape;
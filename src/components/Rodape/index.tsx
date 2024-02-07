/// <reference types="vite-plugin-svgr/client" />
import style from './Rodape.module.scss';
import Alelo from '../../assets/svg/formas-de-pagamento/alelo.svg?react';
import Amex from '../../assets/svg/formas-de-pagamento/amex.svg?react';
import Dinners from '../../assets/svg/formas-de-pagamento/dinners.svg?react';
import Elo from '../../assets/svg/formas-de-pagamento/elo.svg?react';
import Ifood from '../../assets/svg/formas-de-pagamento/ifood.svg?react';
import Mastercard from '../../assets/svg/formas-de-pagamento/mastercard.svg?react';
import Pix from '../../assets/svg/formas-de-pagamento/pix.svg?react';
import Sodexo from '../../assets/svg/formas-de-pagamento/sodexo.svg?react';
import Ticket from '../../assets/svg/formas-de-pagamento/ticket.svg?react';
import Visa from '../../assets/svg/formas-de-pagamento/visa.svg?react';

import RodapeImagem from '../../assets/svg/rodape__imagem.svg?react';

import Facebook from '../../assets/svg/social/facebook.svg?react';
import Instagram from '../../assets/svg/social/instagram.svg?react';
import Youtube from '../../assets/svg/social/youtube.svg?react';

import Botao from '../Botao';
import { Link } from 'react-router-dom';

const Rodape: React.FC = () => {

  return (
    <footer className={style.rodape}>
      <div className={style.rodape__wrap}>
        <section>
          <h4 className={`${style.rodape__titulo} ${style['rodape__titulo--alt']}`}>
            Sobre nós
          </h4>
          <div className={style.rodape__links}>
            <Link className={style.rodape__link} to={'/'}>Conheça</Link>
            <Link className={style.rodape__link} to={'/'}>Como Comprar</Link>
            <Link className={style.rodape__link} to={'/'}>Indicação e Desconto</Link>
          </div>
          <div className={style.rodape__social}>
            <Facebook />
            <Instagram />
            <Youtube />
          </div>
        </section>

        <section>
          <h4 className={style.rodape__titulo}>Informações Úteis</h4>
          <div className={style.rodape__links}>
            <Link className={style.rodape__link} to={'/'}>Fale Conosco</Link>
            <Link className={style.rodape__link} to={'/'}>Dúvidas</Link>
            <Link className={style.rodape__link} to={'/'}>Prazos de entrega</Link>
            <Link className={style.rodape__link} to={'/'}>Formas de pagamento</Link>
            <Link className={style.rodape__link} to={'/'}>Política de privacidade</Link>
            <Link className={style.rodape__link} to={'/'}>Trocas e devoluções</Link>
          </div>
        </section>

        <aside>
          <h4 className={style.rodape__titulo}>Formas de Pagamento</h4>

          <div className={style.rodape__pagamentos}>
            <Alelo />
            <Amex />
            <Dinners />
            <Elo />
            <Ifood />
            <Mastercard />
            <Pix />
            <Sodexo />
            <Ticket />
            <Visa />
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
            <Botao className={'botao--form'} ancora='#'>
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
          <RodapeImagem className={style.rodape__imagem} />
        </div>
      </div>
    </footer>
  )
}

export default Rodape;
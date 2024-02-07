import monitorarTabletSmartphone from '../../assets/svg/monitorar-tablet-e-smartohone-1.svg';
import supermercados from '../../assets/svg/supermercados-1.svg';
import whiskey from '../../assets/svg/whiskey.svg';
import ferramentas from '../../assets/svg/ferramentas-1.svg';
import cuidadosDeSaude from '../../assets/svg/cuidados-de-saude-1.svg';
import corrida from '../../assets/svg/corrida-1.svg';
import moda from '../../assets/svg/moda-1.svg';
import style from './Categorias.module.scss';
import classNames from 'classnames';

interface ICategoria {
  imagem: string,
  texto: string,
  padrao: boolean
}

const ListaCategorias: ICategoria[] = [
  {
    "imagem": monitorarTabletSmartphone,
    "texto": "Tecnologia",
    "padrao": false,
  },
  {
    "imagem": supermercados,
    "texto": "Supermercado",
    "padrao": true,
  },
  {
    "imagem": whiskey,
    "texto": "Bebidas",
    "padrao": true,
  },
  {
    "imagem": ferramentas,
    "texto": "Ferramentas",
    "padrao": true,
  },
  {
    "imagem": cuidadosDeSaude,
    "texto": "Saúde",
    "padrao": true,
  },
  {
    "imagem": corrida,
    "texto": "Esportes e Fitness",
    "padrao": true,
  },
  {
    "imagem": moda,
    "texto": "Moda",
    "padrao": true,
  },
]

const Categorias: React.FC = () => {
  return (
    <div className={style.categorias}>

      {ListaCategorias.map((item, index) => {
        return (
          <button key={index} className={classNames(
            style.categoria,
            { [style['categoria--ativo']]: !item.padrao }
          )}>
            <div className={classNames(
              style.categoria__box, 
              { [style['categoria__box--ativo']]: !item.padrao }
              )}>
              <img className={style.categoria__imagem} src={item.imagem} alt="#" />
            </div>
            {item.texto}
          </button>
        )
      })}


    </div>
  )
}

export default Categorias;
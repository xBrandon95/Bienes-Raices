import { Cards } from '../../elements/Principal';
import { CardItem } from './CardItem';
import { CasasPrincipal } from '../../data/casasPrincipal';

export const Main = () => {
  return (
    <main>
      <h2 className="text-center">Casas y Depas en Venta</h2>
      <div className="contenedor">
        <Cards>
          {CasasPrincipal.map((casa) => (
            <CardItem
              imagen={casa.imagen}
              nombre={casa.nombre}
              descripcion={casa.descripcion}
              precio={casa.precio}
              wc={casa.wc}
              dormitorios={casa.dormitorios}
              estacionamiento={casa.estacionamiento}
            />
          ))}
        </Cards>
        <div className="right">
          <a href="anuncio" className="btn btn-verde">
            Ver Todas
          </a>
        </div>
      </div>
    </main>
  );
};

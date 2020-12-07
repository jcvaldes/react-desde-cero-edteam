import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export const CursoCard = ({ id, titulo, image, price, profesor }) => {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`/cursos/${id}`}>
          <img src={image} alt={titulo} />
        </Link>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{titulo}</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img
                  src="https://ux.ed.team/img/profesor-2.jpg"
                  alt={profesor}
                />
              </div>
            </div>
            <span className="small">Profesor: {profesor}</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="/">
            {`$ ${price}`}
          </a>
        </div>
      </div>
    </article>
  );
};
CursoCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string,
};
CursoCard.defaultProps = {
  title: 'No se encontró titulo',
  image: '',
  price: 0,
  profesor: '',
};

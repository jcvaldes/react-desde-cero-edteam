import React from 'react';
import PropTypes from 'prop-types';
export const UserCard = ({ name, username, email }) => {
  return (
    <article className="card">
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{name}</h3>
       
        <div className="s-main-center">
          { username }
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="/">
            { email }
          </a>
        </div>
      </div>
    </article>
  );
};
UserCard.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
};
UserCard.defaultProps = {
  name: 'No se encontró usuario',
  username: '',
  email: '',
};

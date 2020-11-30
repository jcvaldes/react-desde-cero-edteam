import React, { useState } from 'react';

const Formulario1 = () => {
  const [inputCorreo, setCorreo] = useState('');
  const handleInputChange = (e) => {
    setCorreo(e.target.value);
  };
  return (
    <div className="ed-grid">
      <h1>Formulario</h1>
      <form>
        <div className="ed-grid m-grid-3">
          <div className="form__item">
            <label>Correo</label>
            <input
              type="text"
              value={inputCorreo}
              onChange={ handleInputChange }
            />
          </div>
          <div className="form__item">
            <input className="button full" type="submit" value="Enviar" />
          </div>
        </div>
      </form>
     {inputCorreo}
    </div>
  );
};
export default Formulario1
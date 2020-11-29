import logo from './logo.svg';
import './styles/styles.scss';
// const App = () => <h1>Hola Mundo</h1>
const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img
            className="main-banner__img"
            src="https://wallpaperset.com/w/full/a/4/6/49091.jpg"
            alt="banner"
          />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de Devkingos</p>
            <p> Tu futuro te está esperando</p>
            <a href="https://devkingos.com" className="button">
              Subscribirse
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="https://ux.ed.team/img/curso-portada.png" alt="curso de go" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
          </h3>
          <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
              <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                  <img src="https://ux.ed.team/img/profesor-2.jpg" alt="Profesor Alexis" />
                </div>
              </div>
              <span className="small">Alexys Lozada</span>
            </div>
          </div>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">
              $ 20USD
            </a>
          </div>
        </div>
      </article>
    </div>
  </>
);

export default App;

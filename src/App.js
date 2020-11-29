import { Curso } from './components/Curso';
import './styles/styles.scss';
// const App = () => <h1>Hola Mundo</h1>
const cursos = [
  {
    title: 'Curso de go desde cero',
    image: 'https://ux.ed.team/img/curso-portada.png',
    price: 30,
    profesor: 'Alexys Lozada',
  },
  {
    title: 'Curso de Javascript',
    image: 'https://ux.ed.team/img/curso-portada.png',
    price: 40,
    profesor: 'Alexys Lozada',
  },
];
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
      {cursos.map((c) => (
        <Curso key={c.title}
          title={c.title}
          price={c.price}
          image={c.image}
          profesor={c.profesor}
        />
      ))}
    </div>
  </>
);

export default App;

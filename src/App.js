import { Curso } from './components/Curso';
import Formulario from './components/Formulario';
import Formulario1 from './components/Formulario1';
import { Hero } from './components/Hero';
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
    <Hero />
    <Formulario name="EDTeam"/>

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

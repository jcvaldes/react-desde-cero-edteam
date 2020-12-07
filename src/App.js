import MainMenu from './components/MainMenu';
import Curso  from './components/Curso';
import CursoGrid from './components/CursoGrid';
import Formulario from './components/Formulario';
import Formulario1 from './components/Formulario1';
import { Hero } from './components/Hero';
import './styles/styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Historial from './components/Historial';
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
    {/* <Hero /> */}
    {/* <Formulario name="EDTeam"/> */}
    {/* <div className="ed-grid m-grid-3">
      {cursos.map((c) => (
        <Curso key={c.title}
          title={c.title}
          price={c.price}
          image={c.image}
          profesor={c.profesor}
        />
      ))}
    </div> */}
    {/* <CursoGrid ></CursoGrid> */}
    <Router>
      <MainMenu />  
      <Switch>
        <Route path="/" exact component={Hero} />
        <Route path="/cursos/:id" component={Curso} />
        <Route path="/cursos" component={CursoGrid} />
        <Route path="/historial/:id" component={Historial} />
        <Route path="/historial" component={Historial} />
        <Route
          path="/formulario"
          exact
          component={() => <Formulario name="Página de contacto" />}
        />
        <Route
          component={() => (
            <div className="ed-grid">
              <h1>Error 404</h1>
              <span>Pagina no encontrada</span>
            </div>
          )}
        />
      </Switch>
    </Router>
  </>
);

export default App;

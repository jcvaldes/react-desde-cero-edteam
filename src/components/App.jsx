import Header from './Organisms/Header';
import Course  from './Pages/Course';
import Courses from './Pages/Courses';
import Form from './Pages/Form';
import '../styles/styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import History from './Pages/History';
import Home from './Pages/Home';
import Users from './Pages/Users';
import UploadFiles from './Pages/UploadFiles';
import Posts from './Pages/Posts';
// const App = () => <h1>Hola Mundo</h1>
// const courses = [
//   {
//     title: 'Curso de go desde cero',
//     image: 'https://ux.ed.team/img/curso-portada.png',
//     price: 30,
//     profesor: 'Alexys Lozada',
//   },
//   {
//     title: 'Curso de Javascript',
//     image: 'https://ux.ed.team/img/curso-portada.png',
//     price: 40,
//     profesor: 'Alexys Lozada',
//   },
// ];
const App = () => (
  <>
    {/* <Hero /> */}
    {/* <Formulario name="EDTeam"/> */}
    {/* <div className="ed-grid m-grid-3">
      {courses.map((c) => (
        <Course key={c.title}
          title={c.title}
          price={c.price}
          image={c.image}
          profesor={c.profesor}
        />
      ))}
    </div> */}
    {/* <CourseGrid ></CourseGrid> */}
    <Router>
      <Header />  
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses/:id" component={Course} />
        <Route path="/courses" component={Courses} />
        <Route path="/history/:valor" component={History} />
        <Route path="/history" component={History} />
        <Route path="/users" component={Users} />
        <Route path="/upload-files" component={UploadFiles} />
        <Route path="/posts" component={Posts} />
        <Route
          path="/form"
          exact
          component={() => <Form name="Página de contacto" />}
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

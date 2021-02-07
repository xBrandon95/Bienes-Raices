import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Principal } from './pages/Principal';
import { Nosotros } from './pages/Nosotros';
import { Propiedades } from './pages/Propiedades';
import { Contacto } from './pages/Contacto';
import { Propiedad } from './pages/Propiedad';
import { Blogs } from './pages/Blogs';
import { Blog } from './pages/Blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/propiedades" component={Propiedades} />
        <Route path="/propiedad/:id" component={Propiedad} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </Router>
  );
}

export default App;

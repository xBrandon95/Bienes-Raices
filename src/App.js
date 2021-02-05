import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Principal } from './pages/Principal';
import { Nosotros } from './pages/Nosotros';
import { Anuncios } from './pages/Anuncios';
import { Blog } from './pages/Blog';
import { Contacto } from './pages/Contacto';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/anuncios" component={Anuncios} />
        <Route path="/blog" component={Blog} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </Router>
  );
}

export default App;

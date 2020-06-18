import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Repositorio from './pages/repositorio';
import NotaNoticia from './pages/nota-noticia';
import NotaReceta from './pages/nota-receta';
import NotaStorytelling from './pages/nota-storytelling';
import Header from './modules/Header/index';
import Footer from './modules/Footer/index';
import AcuRevista from './pages/acu-revista';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/repositorio" component={Repositorio} />
                <Route exact path="/nota-noticia" component={NotaNoticia} />
                <Route exact path="/nota-receta" component={NotaReceta} />
                <Route exact path="/nota-storytelling" component={NotaStorytelling} />
                <Route exact path="/acu-revista" component={AcuRevista} />
            </Switch>
      </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
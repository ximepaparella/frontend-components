import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import NotaNoticia from './pages/nota-noticia';
import NotaReceta from './pages/nota-receta';
import NotaStorytelling from './pages/nota-storytelling';

function App() {
  return (
    <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/nota-noticia" component={NotaNoticia} />
              <Route exact path="/nota-receta" component={NotaReceta} />
              <Route exact path="/nota-storytelling" component={NotaStorytelling} />
          </Switch>
    </BrowserRouter>
  );
}

export default App;
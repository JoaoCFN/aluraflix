import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/cadastro/video" component={CadastroVideo}/>

            <Route path="/" component={Home} exact /> 

            <Route component={() => (<div>Página 404</div>)}  /> 
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);


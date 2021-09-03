import React,{useState,useEffect,useCallback,memo} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import {Login,Navigation,Dashboard} from './components'
import Home from './views/home'
import Checkout from './views/checkout'
import Perfil from './views/perfil'
import Recuperar from './views/recuperar'
import {Register} from './views/index'
import useToken from './App.hook'

function App() {
    const {token,setToken,user} = useToken();

    const handleOnCerrarSesion = useCallback(() => {
        sessionStorage.clear()
    })

    const handleReportarLogin = useCallback((user,token) => {
        sessionStorage.setItem('usuario',JSON.stringify(user));
        sessionStorage.setItem('token',token);
        setToken(token)
    })

  if(token == null)
    return (
      <div>
        <BrowserRouter>
          <Navigation onCerrarSesion={handleOnCerrarSesion} token={token} user={user} />
          <Switch>
              <Route path="/" exact>
                <Login reportarlogin={handleReportarLogin} />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/recuperar">
                <Recuperar />
              </Route>              
          </Switch>
        </BrowserRouter>
      </div>
    );

  return (
    <div>
      <BrowserRouter>
        <Navigation onCerrarSesion={handleOnCerrarSesion} token={token} user={user} />              
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default memo(App);

import React from 'react';
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

function Navigation({token,user,onCerrarSesion}) {
    const [nombreUsuario,setNombreUsuario] = useState('')

    useEffect(() =>{
        if(user !== null){
            //console.log(user)
            setNombreUsuario(user.usuario)
        }
    },[])

    /*useEffect(() => {
        console.log(nombreUsuario)
        console.log(token)
        console.log(user)        
    },[nombreUsuario])*/

    const handleCerrarSesion = (event) => {
        onCerrarSesion()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
            <div className="container">
                <div className="row">
                    <h2 className="text-light">CRIPTO</h2>
                    <h5 className="text-light font-weight-light ml-1 mt-2">
                            app</h5>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            {token !== null
            ?
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {user.usuario}
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/" onClick={handleCerrarSesion}>Cerrar sesión</a>
                            </div>
                        </li>
                    </ul>
                </div>
            :
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Nuevos usuarios
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/register">Solicitud de creación de cuenta</Link>
                                <Link className="dropdown-item" to="/recuperar">Recuperar password</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            }
            </div>
        </nav>
    );
}

export default Navigation;
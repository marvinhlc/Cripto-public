import React,{useEffect} from 'react';
import config from '../config'
import '../components/styles.css'
import '../App.css'
import {useLocation} from 'react-router'
import {Link} from 'react-router-dom'

function Checkout(props) {
    const location = useLocation();
    console.log(location)
    const {row} = location.state
    console.log(row)
    
    return (
        <div className="dashboard">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Pagar</h5>
                    <p className="card-text">Usted esta realizando el pago por una cripto moneda</p>
                    <div className="row">
                        <div className="col-5">
                            <img src={row.Icon} />{row.Nombre}
                        </div>
                        <div className="col-5">{row.Precio}</div>                
                    </div>
                </div>
                <div className="card-body">
                    {row.Nombre}
                </div>
                <div className="card-footer">
                    <Link to="/" className="btn btn-primary btn-sm">Regresar</Link>
                </div>                     
            </div>
        </div>
    );
}

export default Checkout;
import React,{useState,useEffect} from 'react';
import {FormButton} from '../index'
import { Link } from 'react-router-dom';
import useForm from './dashboard.hoock'
import '../styles.css'

const Dashboard = ({onNavigate}) => {
    const {errores,obtenerMonedas,monedas,nandleNavigateTo} = useForm(onNavigate);
    const sesion = window.sessionStorage;

    useEffect(() => {
        obtenerMonedas(sesion.token)
    },[])

    return (
        <div className="dashboard">
            <div className="card">
                <div className="card-header">
                    <h5 class="card-title">Compra Bitcoin</h5>
                    <p class="card-text">Selecciona la cripto-moneda que deseas comprar.</p>
                </div>
                <div className="card-body">
                    <ul class="list-group list-group-flush">
                        {
                            monedas.map((row) => {
                                return(
                                    <li class="list-group-item list-group-item-action">
                                        <div class="row">
                                        <div class="col-5"><img src={row.Icon} />{row.Nombre}</div>
                                        <div class="col-5">{row.Precio}</div>
                                        <Link 
                                            className="btn btn-success btn-sm btn-block col align-self-end"
                                            to={
                                                {
                                                    pathname:'/checkout',
                                                    state: { fromDashboard: true, row:row }
                                                }
                                            }
                                        >Comprar
                                        </Link>
                                        </div>
                                    </li>            
                                )
                            })
                        }
                    </ul>                
                </div>
                <div class="card-footer">
                    <p class="card-text">Selecciona la cripto-moneda que deseas comprar.</p>
                </div>                     
            </div>   
        </div>
    );
};

export default Dashboard;
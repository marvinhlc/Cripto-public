import React from 'react';
import config from '../config'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import '../components/styles.css'
import '../App.css'

const initialOptions = {
    "client-id": "AY8LxFiIVo7VhNN1DU-PzI9iVTk6qKTYTUirAMlIfFLk8bMG6zXSlYu9JwqmEx3SJprYzMPIBvWlSGOo",
    //currency: "USD",
    //intent: "capture",
    //"data-client-token": "abc123xyz==",
};

function Checkout(props) {
    console.log('checkout...')
    return (
        <div className="dashboard">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Checkout</h5>
                    <p className="card-text">Realizar el pago por una cripto moneda</p>
                </div>
                <div className="card-body">
                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons />
                    </PayPalScriptProvider>         
                </div>
                <div className="card-footer">
                    <p className="card-text">Que la fuerza lo acompañe</p>
                </div>                     
            </div>
        </div>
    );
}

export default Checkout;
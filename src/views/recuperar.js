import React from 'react';
import {Link} from 'react-router-dom'

function Recuperar(props) {
    return (
        <div className="dashboard">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Recuperar password</h5>
                    <p className="card-text">Para recuperar su password complete los siguientes datos</p>
                </div>
                <div className="card-body">
                    datos
                </div>
                <div className="card-footer">
                    <Link to="/" className="btn btn-primary btn-sm">Regresar</Link>
                </div>                     
            </div>
        </div>
    );
}

export default Recuperar;
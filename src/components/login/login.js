import React from 'react';
import {InputLogin,PasswordLogin,FormButton} from '../index'
import '../styles.css';

//HOOK
import useForm from './login.hook'

function Login({reportarlogin}){
    const {loadingButton,errores,onChangeDetails,onSubmitForm} = useForm(reportarlogin);

    return (
        <div className="center-screen">
            <div className="card card-body">
                <h5 className="card-title">INICIAR SESION</h5>
                <form onSubmit={onSubmitForm}>
                    <InputLogin 
                        nameinput="usuario" 
                        labeltext="Nombre de Usuario" 
                        placeholder="Ej. correo o username"
                        onChange={onChangeDetails} />
                    <PasswordLogin 
                        nameinput="password" 
                        labeltext="Password / contraseña" 
                        onChange={onChangeDetails} />
                    <FormButton 
                        namebutton="enviarLogin" 
                        textbutton="Conectarse" 
                        bootstrapstyle="primary" 
                        loadingstatus={loadingButton}
                    />
                    <div className="card-text">
                        {(errores)
                            ?errores:''
                        }
                    </div>                    
                </form>
            </div>
        </div>
    );
}

export default Login;
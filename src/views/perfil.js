import {Link} from 'react-router-dom'
import {PasswordLogin,TextInput,FormButton} from '../components/'
import useForm from './perfil.hook'

function Perfil(props) {
    const loadingButton = false

    const {onChangeDetails} = useForm()

    const onSubmitForm = () => {

    }

    return (
        <div className="dashboard">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Solicitud de creación de cuenta</h5>
                    <p className="card-text">Por favor complete los datos que se le piden a continuación</p>
                </div>
                <div className="card-body">
                    <div class={"col-6"}>
                        <form onSubmit={onSubmitForm}>
                            <TextInput 
                                nameinput="nombres" 
                                labeltext="Nombres" 
                                placeholder="Ej. Juan"
                                onChange={onChangeDetails} />
                            <TextInput 
                                nameinput="apellidos" 
                                labeltext="Apellidos" 
                                placeholder="Ej. Pérez"
                                onChange={onChangeDetails} />
                            <TextInput 
                                nameinput="telefono" 
                                labeltext="Teléfono" 
                                placeholder="Ej. 9999-9999"
                                onChange={onChangeDetails} />                                
                            <TextInput 
                                nameinput="email" 
                                labeltext="Email" 
                                placeholder="Ej. algo@correo.com"
                                onChange={onChangeDetails} />                                
                            <TextInput 
                                nameinput="nit" 
                                labeltext="Número de NIT" 
                                placeholder="Ej. 999-999999-999-9"
                                onChange={onChangeDetails} />                                
                            <TextInput 
                                nameinput="DUI" 
                                labeltext="Número de DUI" 
                                placeholder="Ej. 99999999-9"
                                onChange={onChangeDetails} />                                

                        </form>
                    </div>
                </div>
                <div className="card-footer">
                    <Link to="/" className="btn btn-primary btn-sm mr-2">Ir a Inicio</Link>
                    <Link to="/" className="btn btn-primary btn-sm mr-2">Guardar</Link>
                </div>                     
            </div>
        </div>
    );
}

export default Perfil;
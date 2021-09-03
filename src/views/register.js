import {Link} from 'react-router-dom'
import {PasswordLogin,TextInput,FormButton} from '../components/'
import useForm from './register.hook'
import Step1 from './register.step1'
import Step2 from './register.step2'
import Step3 from './register.step3'

function Register(props) {

    const screens = [
        {screen:null,title:'Datos personales'},
        {screen:null,title:'Carga de documentos de identidad'}
    ]
    const {
        onSubmitForm,
        onNextScreen,
        onBackScreen,
        onFormFilled,
        currentScreen,
        currentTitle,
        navigator,
        current,
        saveButton,
        details
    } = useForm(screens)

    return (
        <form onSubmit={onSubmitForm}>
            <div className="dashboard">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Solicitud de creación de cuenta</h5>
                        <p className="card-text">{currentTitle} - Paso {current}</p>
                    </div>
                    <div className="card-body">
                        <Step1 data={details} navigator={current} onFormFilled={onFormFilled}/>
                        <Step2 data={details} navigator={current} onFormFilled={onFormFilled}/>
                    </div>
                    <div className="card-footer">
                        {navigator == 0
                        ?<Link to="/" className="btn btn-primary btn-sm mr-2">Ir a Inicio</Link>
                        :<button 
                            className="btn btn-primary btn-sm mr-2"
                            type="submit" 
                            onClick={onBackScreen}>Anterior</button>
                        }
                        
                        {saveButton == false
                        ?<button 
                            className="btn btn-primary btn-sm"
                            type="submit" 
                            onClick={onNextScreen}>Siguiente</button>
                        :<button 
                            className="btn btn-primary btn-sm"
                            type="submit">Guardar</button>
                        }

                    </div>                     
                </div>
            </div>
        </form>
    );
}

export default Register;
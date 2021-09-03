import {Link} from 'react-router-dom'
import {PasswordLogin,TextInput,FormButton} from '../components/'

function RegisterStep3({navigator,onFormFilled}) {

    const onChangeDetails = () => {
        
    }

    if(navigator != 3)
        return(<></>)

    return (
        <div className="col-8">
            <TextInput 
                nameinput="correo" 
                labeltext="Correo" 
                placeholder="Ej. correo@correo.com"
                onChange={onChangeDetails} />
            <TextInput 
                nameinput="apodo" 
                labeltext="Apodo" 
                placeholder="Ej. maverik"
                onChange={onChangeDetails} />
            <PasswordLogin 
                nameinput="password" 
                labeltext="Password" 
                onChange={onChangeDetails} />       
            <PasswordLogin 
                nameinput="confirmar" 
                labeltext="Confirmar password" 
                onChange={onChangeDetails} />   

            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input"  type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">Estoy de acuerdo</label>
                </div>
            </div>
        </div>
    );
}

export default RegisterStep3;
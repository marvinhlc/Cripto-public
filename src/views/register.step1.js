import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {PasswordLogin,TextInput,FormButton,SelectInput} from '../components/'

function RegisterStep1({details,navigator,onFormFilled}) {
    const [datos,setDatos] = useState({})

    useEffect(() => {
        onFormFilled('step1',datos)
    },[datos])

    const onChangeDetails = (event) => { 
        if(event.target.name != undefined){
            setDatos({...datos,[event.target.name]: event.target.value})
        }
    }

    if(navigator != 1)
        return(<></>)

    return (
        <div className="form-group col-8">
            <TextInput 
                nameinput="nombres" 
                labeltext="Nombres" 
                placeholder="Ej. Juan"
                value={datos["nombres"]}
                onChange={onChangeDetails} />
            <TextInput 
                nameinput="apellidos" 
                labeltext="Apellidos" 
                placeholder="Ej. Pérez"
                value={datos["apellidos"]}                
                onChange={onChangeDetails} />
            <TextInput 
                nameinput="telefono" 
                labeltext="Teléfono" 
                placeholder="Ej. 9999-9999"
                value={datos["telefono"]}                
                onChange={onChangeDetails} />                                
            <TextInput 
                nameinput="email" 
                labeltext="Email" 
                placeholder="Ej. algo@correo.com"
                value={datos["email"]}                
                onChange={onChangeDetails} />    

            <div className="row">   
                <div className="col">    
                    <SelectInput 
                        nameinput="tipodoc" 
                        labeltext="Tipo / documento" 
                        value={datos["tipodoc"]}
                        data={["Seleccionar","DUI","NIT","PASAPORTE","OTRO"]}
                        onChange={onChangeDetails} />                                      
                </div>
                <div className="col">
                    <TextInput 
                        nameinput="dui" 
                        labeltext="Número de DUI" 
                        placeholder="Ej. 99999999-9"
                        value={datos["dui"]}
                        onChange={onChangeDetails} />                            
                </div>
            </div>

            <div className="row">   
                <div className="col-6">                         
                    <SelectInput 
                        nameinput="genero" 
                        labeltext="Genero" 
                        value={datos["genero"]}
                        data={["Seleccionar","Masculino","Femenino"]}
                        onChange={onChangeDetails} /> 
                </div>
            </div>

        </div>            
    );
}

export default RegisterStep1;
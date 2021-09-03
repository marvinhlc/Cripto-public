import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { PasswordLogin, TextInput, FormButton, FileUpload } from '../components/';

function RegisterStep2({data,navigator,onFormFilled}) {
    const [datos,setDatos] = useState({ficheros:[]})

    useEffect(() => {
        onFormFilled('step2',datos)
        //console.log(datos)
    },[datos])

	const onChangeDetails = (event) => {
        //console.log(datos.files)
        if(event.target.name != undefined){
            let arrais = datos.ficheros
            arrais.push(event.target.files[0])
            //console.log(arrais)
            setDatos({...datos,ficheros: arrais})
        }        
    }

    if(navigator != 2)
        return(<></>)

	return (
        <div className="form-group col-8">
            <FileUpload
                onChange={onChangeDetails}
                name="fotografiaPersonalRostro"
                id="fotografiaPersonalRostro"
                labeltext="Cargar fotografía personal del rostro" />
            <FileUpload
                onChange={onChangeDetails}
                name="fotografiaFrontalDUI"
                id="fotografiaFrontalDUI"
                labeltext="Cargar imagen del lado frontal del DUI" />
            <FileUpload
                onChange={onChangeDetails}
                name="fotografiaReversoDUI"
                id="fotografiaReversoDUI"
                labeltext="Cargar imagen del reverso del DUI" />
		</div>
	);
}

export default RegisterStep2;

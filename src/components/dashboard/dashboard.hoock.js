import React,{useState,useEffect} from 'react';
import config from '../../config'

const useForm = ({onNavigate}) => {
    const [errores,setErrores] = useState('');
    const [monedas,setMonedas] = useState([])

    //OBTENER MONEDAS
    const obtenerMonedas = (token) => {
        const url = config.URL_API.concat('criptomonedas/')

        fetch(url,{
            //mode: 'no-cors',
            method: 'POST',            
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer '+token
            }
        })
        .then((response) => response.json())
        .then((datos) => {
            let {monedas} = datos.datos;
            setMonedas(monedas);
        })
        .catch(err => {
            console.log(err)
        })
    }

    //HANDLE NAVIGATION
    const nandleNavigateTo = ({data}) => {
        console.log(data)
        onNavigate()
    }

    return {
        errores,
        obtenerMonedas,
        monedas,
        nandleNavigateTo
    };
}

export default useForm;
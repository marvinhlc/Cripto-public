import React,{useState,useEffect} from 'react';
import config from '../../config'
import psw from '../../lib/passwords'

const useForm = (reportarlogin) => {
    const [loadingButton,setLoadingButton] = useState(false);
    const [errores,setErrores] = useState('');
    const [details,setDetails] = useState({existe:false,usuario:'',password:'',rol:'',id:0})
    const [token,setToken] = useState('')

   //MANEJAMOS LOS DETALLES DEL USUARIO
    const onChangeDetails = (event) => {
        setDetails({...details,[event.target.name]:event.target.value})
    }

    //MANEJAMOS EL SUBMIT DEL FORM
    const onSubmitForm = (event) => {
        event.preventDefault()
        setLoadingButton(true);

        //console.log(details.password)
        const {usuario,password} = details;
        const url = config.URL_API.concat('usuarios/').concat(usuario)
        //console.log(url)

        var parametros = {password:password}
        //console.log(parametros)
        var headers = {
                        method:'POST',
                        headers:{
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(parametros)
                    }

        fetch(url, headers)
        .then((response) => response.json())
        .then(async (datos) => {
            console.log(datos)
            if(datos != null){
                let {credencial,usuario,idusuario,nombre,token} = datos;
                if(token != null){
                    var user = {
                        usuario: usuario,
                        idusuario: idusuario,
                        nombre: nombre,
                        existe: true,
                        rol: ''
                    }
                    reportarlogin(user,token)
                    setDetails(user)
                    setToken(token)
                    setLoadingButton(false);
                }
            }
        })
        .catch((err) => {
            console.log(err)
            setErrores("Credenciales no son válidas")
            setLoadingButton(false);
        })
    }

    useEffect(() => {
        if(token !== '')
            setErrores("¡Bienvenido!");
    },[token])

    useEffect(() => {
        if(errores !== ''){
            setTimeout(() => {
                setErrores('')
            }, 3000);
        }
    },[errores])

    return {
        loadingButton,
        errores,
        onChangeDetails,
        onSubmitForm
    };
}

export default useForm;
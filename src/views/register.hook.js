import React,{useState,useEffect} from 'react';

export default function useForm(screens){
    const [navigator,setNavigator] = useState(0)
    const [currentScreen,setCurrentScreen] = useState(null)
    const [currentTitle,setCurrentTitle] = useState('')
    const [limite,setLimite] = useState(0)
    const [current,setCurrent] = useState(0)
    const [saveButton,setSaveButton] = useState(false)
    const [details,setDetails] = useState({})

    useEffect(() => {
        //setCurrentScreen(screens[navigator].screen)
        setCurrentTitle(screens[navigator].title)
        setLimite(screens.length)
    },[])

    useEffect(() => {
        //setCurrentScreen(screens[navigator].screen)
        setCurrentTitle(screens[navigator].title)
        setCurrent(navigator+1)
        setSaveButton((navigator+1)==limite)
    },[navigator])

    useEffect(() => {
        console.log(details)
    },[details])

    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log('hola')
    }

    const onNextScreen = (e) => {
        e.preventDefault()
        if(navigator+1 < limite){
            setNavigator(navigator+1)
        }
    }

    const onBackScreen = (e) => {
        e.preventDefault()
        if(navigator-1 < limite){
            setNavigator(navigator-1)
        }
    }

    const onFormFilled = (step,datos) => {
        if(datos != undefined){
            setDetails({...details,[step]:datos})
        }
    }

    return {
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
    }
};

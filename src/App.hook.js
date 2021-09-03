import {useState} from 'react'

export default function useToken() {
    const getToken = () => {
        const token = sessionStorage.getItem('token')
        return token;
    };

    const [token,setToken] = useState(getToken())

    const saveToken = (tokenRecibido) => {
        sessionStorage.setItem('token', tokenRecibido)
        setToken(tokenRecibido)
    };

    return {
        setToken: saveToken,
        token,
        user: JSON.parse(sessionStorage.getItem('usuario'))
    }
}
import React from 'react';
import {useState,useEffect} from 'react';
import '../styles.css';

function FormButton({namebutton,textbutton,handleOnSubmit,bootstrapstyle,loadingstatus}){

    const bootStrapStyleSelected = (bootstrapstyle) => {
        switch (bootstrapstyle) {
            case "primary":
                return "btn btn-primary"
            case "secondary":
                return "btn btn-secondary"
            case "success":
                return "btn btn-success"
            case "danger":
                return "btn btn-danger"
            case "warning":
                return "btn btn-warning"
            case "info":
                return "btn btn-info"
            case "light":
                return "btn btn-light"
            case "dark":
                return "btn btn-dark"
            case "link":
                return "btn btn-link"
            default:
                return "btn btn-primary"
        }
    }

    const [loading,setLoading] = useState(false);

    //MANEJAMOS LA ANIMACION DEL BUTTON
    const internalHandleOnSubmit = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    useEffect(() => {
        if(loadingstatus)
        {
            internalHandleOnSubmit();
        }
    },[loadingstatus])

    return(
        <div class="form-group">
            <button 
                className={bootStrapStyleSelected(bootstrapstyle)}
                name={namebutton}
                type="submit" 
                onClick={handleOnSubmit}
                disabled={loading}
            >
                {loading && (
                    <i className="fa fa-refresh fa-spin"
                        style={{ marginRight: "5px" }}
                    />
                )}
                {loading ? <span>Ejecutando...</span> : <span>{textbutton}</span>}
            </button>
        </div>
    );
}

export default FormButton;
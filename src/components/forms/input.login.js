import React from 'react';
import '../styles.css';

function InputLogin({nameinput,labeltext,placeholdertext,onChange,value,requerido}){
    return(
        <div class="form-group">
            <label for={nameinput} className="card-text text-start">{labeltext}</label>
            <input 
                type="text" 
                name={nameinput} 
                className="form-control" 
                placeholder={placeholdertext} 
                onChange={onChange} 
                value={value}
                requerid={requerido}
            />
        </div>
    );
}

export default InputLogin;
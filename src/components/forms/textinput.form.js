import React from 'react';
import '../styles.css';

function TextInput({nameinput,labeltext,placeholdertext,onChange,value,requerido}){
    return(
        <div class="form-group">
            <label for={nameinput} className="form-label">{labeltext}</label>
            <input 
                type="text" 
                name={nameinput} 
                className="form-control form-control-sm" 
                placeholder={placeholdertext} 
                onChange={onChange} 
                value={value}
                requerid={requerido}
            />
        </div>
    );
}

export default TextInput;
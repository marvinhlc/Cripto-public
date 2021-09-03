import React from 'react';
import '../styles.css';

function PasswordLogin({nameinput,labeltext,onChange,value}){
    return(
        <div class="form-group">
            <label for={nameinput} className="card-text text-start">{labeltext}</label>
            <input 
                type="password" 
                name={nameinput} 
                class="form-control" 
                onChange={onChange} 
                value={value}
            />
        </div>
    );
}

export default PasswordLogin;
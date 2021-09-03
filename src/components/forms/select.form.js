import React from 'react';
import '../styles.css';

function SelectInput({nameinput,labeltext,data,onChange,value}){
    return(
        <div class="form-group">
            <label for={nameinput} className="card-text text-start">{labeltext}</label>
            <select 
                className="form-control form-control-sm" 
                name={nameinput} 
                onChange={onChange} 
                value={value}>
                {data.map((item, index) => {
                    return <option value={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default SelectInput;
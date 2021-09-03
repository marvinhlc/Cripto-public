import React from 'react';
import '../styles.css';

function FileUpload({nameinput,labeltext,onChange,value}){
    return(
        <div className="form-group">
            <label className="form-label">{labeltext}</label>
            <input 
                name={nameinput}
                onChange={onChange}
                type="file" 
                className="form-control-file" 
                multiple={false}
                value={value}
                id={nameinput} />            
        </div>            
    );
}

export default FileUpload;
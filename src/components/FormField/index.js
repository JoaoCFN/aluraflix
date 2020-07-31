import React from 'react';

function FormField({ title, fieldType, type, name, onChange, }){
    return (
        <div>
            <label>
                {title}: 
                {fieldType === "textarea" ? (
                    <textarea 
                        type={type}
                        name={name}
                        onChange={onChange}
                    />
                ): (
                    <input 
                        type={type}
                        name={name}
                        onChange={onChange}
                    />       
                )}
            </label>
        </div>
    );    
}

export default FormField;
import React from "react"; 

const FormField = props => {
    
    return (
      <div>
      <label name={props.label}>{props.label}</label>
      <input placeholder={props.placeholder}></input>
      </div>
    );
  };
  
  export default FormField;
  


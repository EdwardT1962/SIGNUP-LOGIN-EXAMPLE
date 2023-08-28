import './InputField.css';


// src/components/InputField.js
function InputField({ label, type, name, value, onChange }) {
    return (
      <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} id={name} value={value} onChange={onChange} />
      </div>
    );
  }
  
  export default InputField;
  
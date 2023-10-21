import React from "react";

function FormInput({ label, name, type, placeholder, value, onChange}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-2xl capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="input input-bordered input-lg"
      />
    </div>
  );
}

export default FormInput;

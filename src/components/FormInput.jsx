import React from "react";

function FormInput({ type, name, label }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder="Type here"
        className="input input-bordered w-full"
      />    
    </label>
  );
}

export default FormInput;

function LabelInput({ label, placeholder, type = "text" }) {
  return (
    <div className="labelInputContainer">
      <label className="inputLabel">{label}</label>
      <input className="passwordInput" type={type} placeholder={placeholder} />
    </div>
  );
}

export default LabelInput;

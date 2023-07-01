import React from "react";
// import classnames from "classnames";
function CustomInput({
  label,
  type,
  icon,
  placeholder,
  name,
  onChange,
  errors,
  required,
  // password,
}) {
  // const [passwordVisible, setPasswordVisible] = useState(password);

  return (
    <div className="mb-4">
      <label className="form-label">
        <span className="ml-2 font-bold text-sm flex justify-start items-center">
          {icon}&nbsp; {label}
        </span>
      </label>
      <div className="input-group">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          required={required}
          className="py-1 rounded-[0.5rem] px-2 w-5/5 outline-none border focus:border-slate-500"
        />
        {/* {password && (
          <span className="input-group-text">
            <i
              onClick={() => setPasswordVisible(!passwordVisible)}
              className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </span>
        )} */}
        {errors && <div class="invalid-feedback">{errors}</div>}{" "}
      </div>
    </div>
  );
}

export default CustomInput;

import * as React from "react";

type InputCheckboxProps = {
  checked: boolean;
  children: React.ReactNode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputCheckbox = ({
  checked,
  children,
  handleChange,
}: InputCheckboxProps) => {
  return (
    <div className="c-input-checkbox">
      <label className="c-input-checkbox__label">
        <input
          type="checkbox"
          checked={checked}
          className="c-input-checkbox__input"
          onChange={handleChange}
        />
        <span className="ml-3 c-input-checkbox__label-text">{children}</span>
      </label>
    </div>
  );
};

export default InputCheckbox;

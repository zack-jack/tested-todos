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
    <div>
      <label className="flex items-center">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className="ml-3">{children}</span>
      </label>
    </div>
  );
};

export default InputCheckbox;

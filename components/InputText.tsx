import { UseFormRegister } from "react-hook-form";

type InputTextProps = {
  error: string;
  label: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
};

const InputText = ({
  error,
  label,
  name,
  placeholder,
  register,
}: InputTextProps): JSX.Element => {
  return (
    <div className="c-input-text">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className="c-input-text__input"
      />
      {error && <p className="mt-3 error">{error}</p>}
    </div>
  );
};

export default InputText;

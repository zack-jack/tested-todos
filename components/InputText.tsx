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
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input id={name} placeholder={placeholder} {...register(name)} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputText;

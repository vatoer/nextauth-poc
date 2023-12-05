import { Field, FieldError, UseFormRegister } from "react-hook-form";

interface InputFormProps {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  name: string;
  error: FieldError | undefined;
}

const InputForm = ({
  id,
  label,
  register,
  name,
  error,
  type = "text",
}: InputFormProps) => {
  return (
    <>
      <input
        type={type}
        id={name}
        {...register(name)}
        required
        className="form-control block w-full h-[4em] px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer"
      />
      <label
        htmlFor={name}
        className="transform transition-all absolute top-0 left-0 h-[4em]  items-center p-2 text-sm flex group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:p-2 peer-valid:p-2 group-focus-within:ml-2 peer-valid:ml-2  group-focus-within:top-4 peer-valid:top-4 text-muted-foreground group-focus-within:text-blue-600 peer-valid:bg-white   group-focus-within:bg-white "
      >
        {label}
      </label>
      {error && <span className="text-red-500">{error.message}</span>}
    </>
  );
};

export default InputForm;

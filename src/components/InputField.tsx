import { useField } from "formik";
import type { InputHTMLAttributes } from "react";

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({
  label,
  type = "text",
  name,
  defaultValue,
  inputProps,
}: InputFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        {...field}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {meta.touched && meta.error && (
        <p className="text-xs text-red-400">{meta.error}</p>
      )}
    </div>
  );
};

export default InputField;
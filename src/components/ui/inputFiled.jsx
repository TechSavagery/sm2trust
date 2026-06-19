import { cn } from "@/lib/utils";

const InputFiled = ({ placeholderc, type, name, className, label, id, ...props }) => {
  const inputId = id || name;
  const labelText = label || placeholderc;

  return (
    <>
      <label htmlFor={inputId} className="sr-only">
        {labelText}
      </label>
      <input
        {...props}
        id={inputId}
        type={type}
        placeholder={placeholderc}
        name={name}
        required
        className={cn(
          `px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `
        )}
      />
    </>
  );
};

export default InputFiled;

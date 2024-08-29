import { cn } from "@/lib/utils";

const InputFiled = ({ placeholderc, type, name, className, ...props }) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholderc}
      name={name}
      required
      className={cn(
        `px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `
      )}
    />
  );
};

export default InputFiled;

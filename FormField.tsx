import { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormField({ label, id, ...props }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-ink/70 dark:text-white/70"
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-nova-400 focus:ring-2 focus:ring-nova-400/20 dark:border-white/10 dark:bg-nova-900 dark:text-white"
      />
    </div>
  );
}

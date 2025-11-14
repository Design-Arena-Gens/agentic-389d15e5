import { type FieldError } from "react-hook-form";
import { cn } from "../lib/utils";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  hint?: string;
  error?: FieldError;
};

export function FormField({
  label,
  htmlFor,
  children,
  hint,
  error
}: FormFieldProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="group flex flex-col gap-2 rounded-2xl border border-base-200 bg-white/70 p-4 shadow-sm transition hover:border-primary-200 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-base-700">{label}</span>
        {hint ? (
          <span className="text-xs text-base-400 group-hover:text-base-500">
            {hint}
          </span>
        ) : null}
      </div>
      {children}
      {error ? (
        <span className="text-xs font-medium text-red-500">{error.message}</span>
      ) : null}
    </label>
  );
}

type InputBaseProps = React.ComponentProps<"input">;

export function Input(props: InputBaseProps) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-base-200 bg-base-50 px-3 py-2 text-sm text-base-800 transition placeholder:text-base-300 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200/60"
      )}
    />
  );
}

type TextAreaProps = React.ComponentProps<"textarea">;

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-xl border border-base-200 bg-base-50 px-3 py-2 text-sm text-base-800 transition placeholder:text-base-300 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200/60"
      )}
    />
  );
}

type SelectProps = React.ComponentProps<"select">;

export function Select(props: SelectProps) {
  return (
    <select
      {...props}
      className={cn(
        "w-full rounded-xl border border-base-200 bg-base-50 px-3 py-2 text-sm text-base-800 transition focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200/60"
      )}
    />
  );
}

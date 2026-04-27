"use client";

import { useActionState, useState } from "react";
import type { ChangeEvent } from "react";

import { sendEmail } from "@/app/actions/sendEmail";

import { ContactFormProps, FormState } from "@/lib/types";

const initialState: FormState = { status: "idle" };

const ContactForm = ({ formData }: ContactFormProps) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [state, formAction, isPending] = useActionState(
    async (_prev: FormState, payload: FormData): Promise<FormState> => {
      const errors: Record<string, boolean> = {};
      let isValid = true;

      for (const field of formData) {
        const val = payload.get(field.name) as string | null;

        if (!val || val.trim().length === 0) {
          errors[field.name] = true;
          isValid = false;
        }
      }

      if (!isValid) return { status: "idle", errors };

      const response = await sendEmail(payload);

      return { status: response.success ? "success" : "error" };
    },

    initialState,
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const hasContent = (name: string) => values[name]?.trim().length > 0;

  return (
    <form action={formAction}>
      <div className="flex flex-col">
        {formData.map((data) => {
          const isActive = hasContent(data.name);
          const hasError = state.errors?.[data.name];
          const currentPlaceholder = hasError
            ? "This field is required"
            : data.placeholder;
          const placeholderStyles = hasError
            ? "placeholder:text-red-500"
            : "placeholder:text-muted-foreground sm:placeholder:text-muted-foreground";

          return (
            <div
              key={data.id}
              className="flex flex-col py-8 border-t border-border"
            >
              <div className="flex items-start gap-4">
                <span className="text-sm text-muted pt-1">0{data.id}</span>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor={data.inputId}
                    className={`font-medium transition-all duration-300 ease-in-out ${isActive ? "text-lg lg:text-2xl text-muted" : "max-[374px]:text-lg text-xl sm:text-2xl md:text-lg lg:text-3xl text-foreground"}`}
                  >
                    {data.label}
                  </label>
                  {data.textArea === false ? (
                    <input
                      autoComplete="off"
                      type={data.type}
                      id={data.inputId}
                      name={data.name}
                      value={values[data.name] || ""}
                      onChange={handleChange}
                      className={`text-foreground text-sm sm:text-lg lg:text-xl pt-3 focus:outline-none select-none transition-colors ${placeholderStyles}`}
                      placeholder={currentPlaceholder}
                    />
                  ) : (
                    <textarea
                      autoComplete="off"
                      id={data.inputId}
                      name={data.name}
                      value={values[data.name] || ""}
                      onChange={handleChange}
                      className={`text-foreground text-sm sm:text-lg lg:text-xl pt-3 resize-none focus:outline-none select-none transition-colors min-h-[100px] ${placeholderStyles}`}
                      placeholder={currentPlaceholder}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        type="submit"
        disabled={isPending || state.status === "success"}
        className="relative flex items-center justify-center max-sm:w-full overflow-hidden text-center text-sm text-background hover:text-foreground font-light uppercase bg-foreground rounded-full px-6 py-3 sm:py-2 border border-foreground transition-colors duration-300 ease-in-out cursor-pointer group"
      >
        <span className="relative z-10">
          {isPending && "Sending..."}
          {!isPending && state.status === "idle" && "Send The Message"}
          {!isPending && state.status === "success" && "Message Sent!"}
          {!isPending && state.status === "error" && "Error - Try Again"}
        </span>
        <div className="absolute bottom-0 left-0 w-full h-0 bg-background group-hover:h-full transition-all duration-300 ease-in-out"></div>
      </button>
    </form>
  );
};

export default ContactForm;

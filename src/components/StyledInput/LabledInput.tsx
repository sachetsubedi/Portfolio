"use client";
import { useTheme } from "next-themes";
import { FC, InputHTMLAttributes, useRef } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  field?: ControllerRenderProps<FieldValues>;
}

const LabledInput: FC<props> = ({
  field,
  label,
  placeholder,
  ...remainingProps
}) => {
  const theme = useTheme();

  const labelRef = useRef(null);
  const inputRef = useRef(null);
  return (
    <div
      className={`relative ${
        theme.resolvedTheme === "dark" ? "bg-dark" : "bg-white"
      }  `}
    >
      <Label
        ref={labelRef}
        className={`absolute text-sm bg-inherit left-2 top-3 px-2 transition-all ease-in-out pointer-events-none ${
          theme.resolvedTheme === "dark" ? "text-white bg-black" : "text-black"
        } `}
      >
        {label}
      </Label>
      <Input
        {...remainingProps}
        {...field}
        ref={inputRef}
        placeholder={placeholder}
        onFocus={() => {
          const element: HTMLElement = labelRef.current!;
          element.classList.replace("top-3", "-top-3");
        }}
        onBlur={() => {
          const inputElement: HTMLInputElement = inputRef.current!;
          if (!inputElement.value) {
            const element: HTMLElement = labelRef.current!;
            element.classList.replace("-top-3", "top-3");
          }
        }}
      ></Input>
    </div>
  );
};

export default LabledInput;

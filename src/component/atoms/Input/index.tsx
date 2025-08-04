import {
  ReactNode,
  forwardRef,
  createElement,
  ComponentPropsWithRef,
  ElementType,
} from "react";
import { isTruthy, useClassNames } from "@/lib/utils";

type InputProps<T extends ElementType = "input"> = {
  as?: T;
  error?: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
} & Omit<
  ComponentPropsWithRef<T>,
  "as" | "ref" | "disabled" | "className" | "children"
>;

export const Input = forwardRef(
  <T extends ElementType = "input">(
    {
      children,
      className,
      error,
      disabled,
      as,
      iconLeft,
      iconRight,
      ...props
    }: InputProps<T>,
    ref: React.Ref<Element>
  ) => {
    const As: ElementType = as || "input";

    const inputClass = useClassNames(
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring",
      {
        "border-red-500": isTruthy(error),
        "opacity-50 cursor-not-allowed": !!disabled,
      },
      className
    );

    return (
      <div className="relative w-full">
        {iconLeft && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {iconLeft}
          </span>
        )}

        {createElement(
          As,
          {
            ref,
            className: useClassNames(inputClass, {
              "pl-8": !!iconLeft,
              "pr-8": !!iconRight,
            }),
            disabled,
            ...props,
          },
          children
        )}

        {iconRight && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {iconRight}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

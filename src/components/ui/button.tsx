import { cn } from "@/lib/utils"
import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "default" ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-gray-300 text-black dark:text-white",
          size === "icon" ? "h-9 w-9" : "h-10 px-4",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

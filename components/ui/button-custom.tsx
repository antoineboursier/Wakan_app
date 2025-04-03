import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

export function ButtonCustom({ variant = "primary", disabled = false, children, className, ...props }: ButtonProps) {
  const baseClass = disabled
    ? variant === "primary"
      ? "btn-primary-disabled"
      : "btn-secondary-disabled"
    : variant === "primary"
      ? "btn-primary"
      : "btn-secondary"

  return (
    <button className={cn(baseClass, className)} disabled={disabled} {...props}>
      {children}
    </button>
  )
}


import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-slate-100 text-slate-800 border border-slate-200",
        secondary:
          "bg-slate-100 text-slate-700 border border-slate-200",
        destructive:
          "bg-red-50 text-red-700 border border-red-200",
        outline:
          "text-foreground border border-input",
        success:
          "bg-green-50 text-green-700 border border-green-200",
        warning:
          "bg-yellow-50 text-yellow-700 border border-yellow-200",
        info:
          "bg-blue-50 text-blue-700 border border-blue-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props} />
  );
}

export { Badge, badgeVariants }

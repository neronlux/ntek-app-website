"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

/**
 * Progress Component
 *
 * Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * Wraps Radix UI's Progress Root.
 *
 * @param {number} value - The progress value (0-100).
 * @param {React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>} props - Props for the progress root.
 * @param {React.Ref<React.ElementRef<typeof ProgressPrimitive.Root>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered progress bar.
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

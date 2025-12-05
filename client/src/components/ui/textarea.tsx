import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Textarea Component
 *
 * A styled textarea component for multi-line text input.
 * Includes styles for focus states, placeholders, and disabled states.
 *
 * @param {React.ComponentProps<"textarea">} props - Standard HTML textarea attributes.
 * @param {React.Ref<HTMLTextAreaElement>} ref - Forwarded ref to the textarea element.
 * @returns {JSX.Element} The rendered textarea.
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }

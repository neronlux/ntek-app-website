import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

/**
 * Separator Component
 *
 * Visually or semantically separates content.
 * Wraps Radix UI's Separator Root.
 *
 * @param {string} [orientation="horizontal"] - The orientation of the separator.
 * @param {boolean} [decorative=true] - Whether the separator is purely decorative (hidden from assistive technology).
 * @param {React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>} props - Props for the separator.
 * @param {React.Ref<React.ElementRef<typeof SeparatorPrimitive.Root>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered separator.
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

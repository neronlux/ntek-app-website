import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * RadioGroup Component
 *
 * A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 * Wraps Radix UI's RadioGroup Root.
 *
 * @param {React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>} props - Props for the radio group.
 * @param {React.Ref<React.ElementRef<typeof RadioGroupPrimitive.Root>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered radio group.
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

/**
 * RadioGroupItem Component
 *
 * An individual radio button.
 *
 * @param {React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>} props - Props for the radio item.
 * @param {React.Ref<React.ElementRef<typeof RadioGroupPrimitive.Item>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered radio item.
 */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

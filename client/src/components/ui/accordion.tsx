import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Accordion Component
 *
 * A set of interactive headings that each reveal a section of content.
 * Wraps Radix UI's Accordion Root.
 */
const Accordion = AccordionPrimitive.Root

/**
 * AccordionItem Component
 *
 * An item within the accordion, containing a trigger and content.
 *
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>} props - Props for the accordion item.
 * @param {React.ElementRef<typeof AccordionPrimitive.Item>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered accordion item.
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

/**
 * AccordionTrigger Component
 *
 * The button that toggles the expansion of the accordion content.
 * Includes a chevron icon that rotates when expanded.
 *
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>} props - Props for the trigger.
 * @param {React.ElementRef<typeof AccordionPrimitive.Trigger>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered trigger button.
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

/**
 * AccordionContent Component
 *
 * The content that is revealed when the accordion trigger is clicked.
 * Supports animation for opening and closing.
 *
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>} props - Props for the content.
 * @param {React.ElementRef<typeof AccordionPrimitive.Content>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered content.
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

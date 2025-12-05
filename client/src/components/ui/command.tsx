import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

/**
 * Command Component
 *
 * A command palette component built on top of `cmdk`.
 * Allows searching and selecting commands.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive>} props - Props for the command root.
 * @param {React.Ref<React.ElementRef<typeof CommandPrimitive>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered command palette.
 */
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

/**
 * CommandDialog Component
 *
 * A version of the Command component that renders inside a Dialog modal.
 *
 * @param {DialogProps} props - Props for the dialog.
 * @returns {JSX.Element} The rendered command dialog.
 */
const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

/**
 * CommandInput Component
 *
 * The input field for the command palette.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>} props - Props for the input.
 * @param {React.Ref<React.ElementRef<typeof CommandPrimitive.Input>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered input.
 */
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

/**
 * CommandList Component
 *
 * The container for command items.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>} props - Props for the list.
 * @param {React.Ref<React.ElementRef<typeof CommandPrimitive.List>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered list.
 */
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

/**
 * CommandEmpty Component
 *
 * Displayed when no search results are found.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>} props - Props for the empty state.
 * @param {React.Ref<React.ElementRef<typeof CommandPrimitive.Empty>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered empty state.
 */
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

/**
 * CommandGroup Component
 *
 * Groups related command items.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>} props - Props for the group.
 * @param {React.Ref<React.ElementRef<typeof CommandPrimitive.Group>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered group.
 */
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

/**
 * CommandSeparator Component
 *
 * Visual separator between items or groups.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>} props - Props for the separator.
 * @param {React.Ref<React.ElementRef<typeof CommandPrimitive.Separator>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered separator.
 */
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

/**
 * CommandItem Component
 *
 * An individual selectable item in the command list.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>} props - Props for the item.
 * @param {React.Ref<React.ElementRef<typeof CommandPrimitive.Item>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered item.
 */
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

/**
 * CommandShortcut Component
 *
 * Displays a keyboard shortcut hint for the command.
 *
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - Standard HTML span attributes.
 * @returns {JSX.Element} The rendered shortcut.
 */
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

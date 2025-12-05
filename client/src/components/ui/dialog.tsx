"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Dialog Component
 *
 * A window overlaid on either the primary window or another dialog window.
 * Wraps Radix UI's Dialog Root.
 */
const Dialog = DialogPrimitive.Root

/**
 * DialogTrigger Component
 *
 * The button that opens the dialog.
 */
const DialogTrigger = DialogPrimitive.Trigger

/**
 * DialogPortal Component
 *
 * Portals the dialog content into the body.
 */
const DialogPortal = DialogPrimitive.Portal

/**
 * DialogClose Component
 *
 * The button that closes the dialog.
 */
const DialogClose = DialogPrimitive.Close

/**
 * DialogOverlay Component
 *
 * The dim backdrop behind the dialog.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>} props - Props for the overlay.
 * @param {React.Ref<React.ElementRef<typeof DialogPrimitive.Overlay>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered overlay.
 */
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

/**
 * DialogContent Component
 *
 * The main content container of the dialog.
 * Includes a close button.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>} props - Props for the content.
 * @param {React.Ref<React.ElementRef<typeof DialogPrimitive.Content>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered content.
 */
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

/**
 * DialogHeader Component
 *
 * Container for the dialog title and description.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @returns {JSX.Element} The rendered header.
 */
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

/**
 * DialogFooter Component
 *
 * Container for action buttons at the bottom of the dialog.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @returns {JSX.Element} The rendered footer.
 */
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

/**
 * DialogTitle Component
 *
 * The title of the dialog.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>} props - Props for the title.
 * @param {React.Ref<React.ElementRef<typeof DialogPrimitive.Title>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered title.
 */
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

/**
 * DialogDescription Component
 *
 * The description/message of the dialog.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>} props - Props for the description.
 * @param {React.Ref<React.ElementRef<typeof DialogPrimitive.Description>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered description.
 */
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

import { cn } from "@/lib/utils"

/**
 * Skeleton Component
 *
 * Used to display a placeholder preview of content before the data gets loaded.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @returns {JSX.Element} The rendered skeleton.
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }

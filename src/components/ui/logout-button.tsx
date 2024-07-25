"use client"

import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { signOut } from "next-auth/react"

type Props = {
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function LogoutButton({ className, ...props }: Props) {
  const { open, animate } = useSidebar()
  return (
    <button
      className={cn(
        "group/sidebar flex items-center justify-start gap-3 py-2",
        className,
      )}
      onClick={event => {
        event.preventDefault()
        signOut({
          callbackUrl: `${window.location.origin}/login`,
        })
      }}
      {...props}
    >
      <ArrowLeft className="size-6 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="!m-0 inline-block whitespace-pre !p-0 text-sm text-neutral-700 transition duration-150 group-hover/sidebar:translate-x-1 dark:text-neutral-200"
      >
        Logout
      </motion.span>
    </button>
  )
}

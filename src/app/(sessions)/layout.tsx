"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isGrid = pathname === "/sessions"

  return (
    <div>
      <div className="layout">
        <div className={`layout_item ${isGrid && "active"}`}>
          <Link href={`/sessions`}>Grid</Link>
        </div>
        <div className={`layout_item ${!isGrid ? "active" : null}`}>
          <Link href={`/session-lines`}>List</Link>
        </div>
      </div>
      {children}
    </div>
  )
}

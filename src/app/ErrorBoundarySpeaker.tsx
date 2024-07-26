"use client"

import { ReactNode } from "react"
import { ErrorBoundary } from "react-error-boundary"

function ErrorFallBack({ error }: { error: Error }) {
  return (
    <div style={{ display: "grid", alignItems: "center", gridTemplateColumns: "140px auto" }}>
      <p style={{ background: "gray", width: "135px", height: "135px" }}></p>
      <p style={{ color: "red", fontSize: "15px" }}>Error loading...</p>
    </div>
  )
}

export default function ErrorBoundarySpeaker({ children }: { children: ReactNode }) {
  return <ErrorBoundary FallbackComponent={ErrorFallBack}>{children}</ErrorBoundary>
}

"use client"

import { ReactNode } from "react"
import { ErrorBoundary } from "react-error-boundary"

function ErrorFallBack({ error }: { error: Error }) {
  return (
    <div>
      <p> Something went wrong.. </p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  )
}

export default function ErrorBoundaryFunctionalWrapper({ children }: { children: ReactNode }) {
  return <ErrorBoundary FallbackComponent={ErrorFallBack}>{children}</ErrorBoundary>
}

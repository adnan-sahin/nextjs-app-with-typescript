"use client"
import { Speaker } from "@/app/speaker-detail"

import { ReactNode, useState } from "react"

export default function ToolTipSpeaker({ children, speaker }: { children: ReactNode; speaker: Speaker | undefined }) {
  const [show, setShow] = useState(false)

  return (
    <div className="tooltip-container" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className="tooltip">
          <h4>
            {speaker?.first} {speaker?.last}
          </h4>
          <p> {speaker?.bio.slice(0, 150)} </p>
        </div>
      )}
    </div>
  )
}

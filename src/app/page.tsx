import { sessionsData } from "@/app/common/sessions-data"
import SpeakerDetail from "@/app/speaker-detail"
import "@/styles/session.scss"
import React, { Suspense } from "react"
import SpeakerDetailLoading from "@/app/speaker-detail-loading"
import ErrorBoundaryFunctionalWrapper from "./common/ErrorBoundaryFunctionalWrapper"
import ErrorBoundarySpeaker from "./ErrorBoundarySpeaker"

interface Session {
  id?: string
  title: string
  speakerId?: string
  description: string
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function getSessions(): Promise<Session[]> {
  await delay(200)
  // throw new Error("Errors in getSessions()")
  return sessionsData
}

export default function Page() {
  return (
    <ErrorBoundaryFunctionalWrapper>
      <Suspense fallback={<SessionsLoading />}>
        <Sessions />
      </Suspense>
    </ErrorBoundaryFunctionalWrapper>
  )
}

function SessionsLoading() {
  return [1, 2, 3].map((i) => {
    return (
      <div className="event" key={i}>
        <div className="suspense_loading lg">
          <div style={{ visibility: "hidden" }}>title</div>
        </div>
        <br />
        <div className="suspense_loading lg">
          <div style={{ visibility: "hidden" }}>description</div>
        </div>
        <br />
        <div>
          <SpeakerDetailLoading />
        </div>
      </div>
    )
  })
}

async function Sessions() {
  const sessions = await getSessions()

  return (
    <div className="event_container">
      {sessions.map((session: Session) => {
        return (
          <div className="event_list" key={session.id}>
            <div className="event_title"> {session.title} </div>
            <div className="event_description"> {session.description} </div>
            <ErrorBoundarySpeaker>
              <Suspense fallback={<SpeakerDetailLoading />}>
                <SpeakerDetail speakerId={session?.speakerId} />
              </Suspense>
            </ErrorBoundarySpeaker>
          </div>
        )
      })}
    </div>
  )
}

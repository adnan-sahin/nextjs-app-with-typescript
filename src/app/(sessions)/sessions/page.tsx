import { sessionsData } from "@/app/common/sessions-data"
import SpeakerDetail from "@/app/(sessions)/sessions/speaker-detail"
import "@/styles/session.scss"
import React, { Suspense } from "react"
import SpeakerDetailLoading from "@/app/(sessions)/sessions/speaker-detail-loading"
import ErrorBoundarySpeaker from "./error-boundry-speaker"
import { Session } from "@/app/common/app-interfaces"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function getSessions(): Promise<Session[]> {
  await delay(1000)
  // throw new Error("Errors in getSessions()")
  return sessionsData
}

export default async function Sessions() {
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

import { Session } from "@/app/common/app-interfaces"
import { sessionsData } from "@/app/common/sessions-data"
import "@/styles/session.scss"
import Link from "next/link"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function getSessions(): Promise<Session[]> {
  await delay(2000)
  return sessionsData
}

export default async function SessionLines() {
  const sessions = await getSessions()
  return (
    <div>
      {sessions.map((session) => {
        return (
          <div className="event_lines" key={session.id}>
            <div> {session.title} </div>
            <div className="event_lines_speaker">
              <Link href={`speakers/${session.speakerId}`}>Speaker</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

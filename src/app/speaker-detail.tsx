import { speakersData } from "@/app/common/speakers-data"
import Image from "next/image"
import ToolTipSpeaker from "@/app/ToolTipSpeaker"

export interface Speaker {
  id: string
  first: string
  last: string
  sessionId: string
  bio: string
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function getSpeaker(speakerId: string) {
  await delay(200)
  //   if (speakerId == "8367") {
  //     throw new Error("Errors in getSpeaker()")
  //   }
  return speakersData.find((p) => p.id === speakerId)
}

export default async function SpeakerDetail({ speakerId }: { speakerId: string }) {
  const speaker = await getSpeaker(speakerId)

  return (
    <ToolTipSpeaker speaker={speaker} key={speakerId}>
      <div className="event_speaker">
        <div>
          <Image
            src={`/speakers/speaker-${speakerId}.jpg`}
            alt={`${speaker?.first} ${speaker?.last}`}
            width={135}
            height={135}
          />
        </div>
        <div className="event_speaker_name">
          <a href="">
            <div>
              {speaker?.first.toUpperCase()} {speaker?.last.toUpperCase()}
            </div>
          </a>
        </div>
      </div>
    </ToolTipSpeaker>
  )
}

import { speakersData } from "@/app/common/speakers-data"
import Image from "next/image"
import ToolTipSpeaker from "@/app/(sessions)/sessions/tooltip-speaker"
import Link from "next/link"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function getSpeaker(speakerId: string | undefined) {
  await delay(1000)
  //   if (speakerId == "8367") {
  //     throw new Error("Errors in getSpeaker()")
  //   }
  return speakersData.find((p) => p.id === speakerId)
}

export default async function SpeakerDetail({ speakerId }: { speakerId: string | undefined }) {
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
          <Link href={`/speakers/${speaker?.id}`}>
            <div>
              {speaker?.first.toUpperCase()} {speaker?.last.toUpperCase()}
            </div>
          </Link>
        </div>
      </div>
    </ToolTipSpeaker>
  )
}

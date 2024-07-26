import { speakersData } from "@/app/common/speakers-data"
import SpeakerDetailsWithBio from "../speaker-details-with-bio"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const getSpeaker = async (speakerId: string) => {
  await delay(1000)
  return speakersData.find((s) => s.id === speakerId) || { id: "", sessionId: "", first: "", last: "", bio: "" }
}

export default async function Speaker({ params }: { params: { speakerId: string } }) {
  const speaker = await getSpeaker(params.speakerId)

  return <SpeakerDetailsWithBio speaker={speaker} />
}

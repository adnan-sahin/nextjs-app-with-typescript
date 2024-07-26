import { Speaker } from "@/app/common/app-interfaces"
import SpeakerDetailsWithBio from "./speaker-details-with-bio"
import { speakersData } from "@/app/common/speakers-data"
import styles from "./details.module.scss"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const getSpeakersList = async () => {
  await delay(2000)
  // throw new Error("Error Loading speakers")
  return speakersData
}

export default async function Speakers() {
  const speakers = await getSpeakersList()
  return (
    <div className={styles.speaker}>
      {speakers.map((speaker: Speaker) => {
        return (
          <div key={speaker.id}>
            <SpeakerDetailsWithBio speaker={speaker} />
          </div>
        )
      })}
    </div>
  )
}

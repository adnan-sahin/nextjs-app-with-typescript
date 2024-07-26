import { Speaker } from "@/app/common/app-interfaces"
import Image from "next/image"
import styles from "./details.module.scss"

export default function SpeakerDetailsWithBio({ speaker }: { speaker: Speaker }) {
  return (
    <div className={styles.speaker_details}>
      <Image src={`/speakers/speaker-${speaker.id}.jpg`} width={135} height={135} alt="" />
      <div>
        <div className={styles.speaker_name}>
          {speaker.first.toUpperCase()} {speaker.last.toUpperCase()}
        </div>
        <div className={styles.speaker_description}> {speaker.bio} </div>
      </div>
    </div>
  )
}

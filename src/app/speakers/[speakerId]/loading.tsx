import styles from "../details.module.scss"
import Image from "next/image"

export default function Loading() {
  return (
    <div className={styles.speaker}>
      {[1].map((id) => {
        return (
          <div key={id}>
            <div className={styles.speaker_details}>
              <Image src={`/loading.gif`} width={135} height={135} alt="" />
              <div>
                <div className={styles.speaker_name}>
                  <Image src={`/placeholder-text.gif`} width={225} height={25} alt="" />
                </div>
                <Image src={`/placeholder-text.gif`} width={125} height={25} alt="" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

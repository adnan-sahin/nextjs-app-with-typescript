import Image from "next/image"
export default function SpeakerDetailLoading() {
  return (
    <div className="event_speaker">
      <div>
        <Image src={"/loading.gif"} width={135} height={135} alt="" />
      </div>
      <div className="suspense_loading xs">
        <div style={{ visibility: "hidden" }}>Spekaer First Last</div>
      </div>
    </div>
  )
}

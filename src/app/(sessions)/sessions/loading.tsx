import SpeakerDetailLoading from "@/app/(sessions)/sessions/speaker-detail-loading"

export default function loading() {
  return (
    <div className="event_container">
      {[1, 2, 3].map((i) => {
        return (
          <div className="event_list" key={i}>
            <div className="suspense_loading md">
              <div style={{ visibility: "hidden" }}>title</div>
            </div>
            <br />
            <div className="suspense_loading sm">
              <div style={{ visibility: "hidden" }}>description</div>
            </div>
            <br />
            <div>
              <SpeakerDetailLoading />
            </div>
          </div>
        )
      })}
    </div>
  )
}

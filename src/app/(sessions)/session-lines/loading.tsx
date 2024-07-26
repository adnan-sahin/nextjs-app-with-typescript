import Image from "next/image"

export default async function Loading() {
  return (
    <div>
      {[1, 2, 3].map((id) => {
        return (
          <div className="event_lines" key={id}>
            <div>
              <Image src={`/placeholder-text.gif`} alt="" height={25} width={150} />{" "}
            </div>

            <div>
              <Image src={`/placeholder-text.gif`} alt="" height={25} width={150} />{" "}
            </div>
          </div>
        )
      })}
    </div>
  )
}

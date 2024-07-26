import Link from "next/link"
import Image from "next/image"

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/">
        <div className="nav_link logo">
          <Image src="/next.svg" alt="" width={30} height={30} />
        </div>
      </Link>

      <Link href="/sessions">
        <div className="nav_link">Sessions</div>
      </Link>

      <Link href="/speakers">
        <div className="nav_link">Speakers</div>
      </Link>
    </nav>
  )
}

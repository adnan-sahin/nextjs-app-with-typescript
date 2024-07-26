import "server-only"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner">Next.js App With TypeScript - {new Date().getFullYear()}</div>
    </div>
  )
}

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.scss"
import Nav from "@/app/common/nav"
import Footer from "@/app/common/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js App With TypeScript",
  description: "Next.js App With TypeScript",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div style={{ overflow: "hidden" }}>
          <header>
            <div>
              <Nav />
            </div>
          </header>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}

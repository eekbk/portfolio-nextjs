import DrawerAppBar from "./components/drawerAppBar"
import './globals.css'

export const metadata = {
  title: 'Eric Kuehnemann&apos;s Portfolio',
  description: 'Eric Kuehnemann: Frontend Specialist & Fullstack Developer currently living in New Orleans. Expertise in JavaScript, React, Next, Tailwind, TypeScript, and more. Merging a decade of creative performing arts (including improv, music, and film) with cutting-edge web development for intuitive and impactful user experiences.'
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="body">
        <header>
          <DrawerAppBar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
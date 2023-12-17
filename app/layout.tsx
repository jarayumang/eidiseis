import type { Metadata } from 'next'
import { Rubik as FontSans } from "next/font/google"
import '@/styles/globals.css'

import { cn } from "@/lib/utils"
import { AuthContextProvider } from '@/context/AuthContext'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Eidiseis",
  icons: {
    icon: '/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex flex-row h-screen w-screen bg-whitish font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}

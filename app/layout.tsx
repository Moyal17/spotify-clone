import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import SideBar from "@/Components/SideBar/SideBar";
import SupabaseProvider from "@/providers/supabaseProvider";
import {MyUserContextProvider} from "@/hook/useUser";

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify clone',
  description: 'Listen to music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <MyUserContextProvider>
            <SideBar>
              {children}
            </SideBar>
          </MyUserContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}

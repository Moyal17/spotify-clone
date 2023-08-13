import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SideBar from "@/Components/SideBar/SideBar";
import SupabaseProvider from "@/providers/supabaseProvider";
import { MyUserContextProvider } from "@/hooks/useUser";
import ModalProvider from "@/providers/modalProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify clone",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <MyUserContextProvider>
            <ModalProvider />
            <SideBar>{children}</SideBar>
          </MyUserContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import SideBar from '@/Components/SideBar/SideBar';
import SupabaseProvider from '@/providers/supabaseProvider';
import { MyUserContextProvider } from '@/hooks/useUser';
import ModalProvider from '@/providers/modalProvider';
import getSongsByUserId from '@/actions/getSongsByUserId';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify clone',
  description: 'Listen to music!'
};

export const revalidate = 0 // we dont want this component to be cached
export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <MyUserContextProvider>
            <ModalProvider />
            <SideBar songs={userSongs}>{children}</SideBar>
          </MyUserContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

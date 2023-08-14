'use client';
import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { useUser } from '@/hooks/useUser';
import useAuthModal from '@/hooks/useAuthModal';
import useUploadModal from '@/hooks/useUploadModal';
import SongItemSideBar from '@/Components/SongItem/SongItemSideBar'
import { type Song } from '@/types/types';
import useOnPlay from '@/hooks/useOnPlay';
interface LibraryProps {
  songs: Song[]
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal()
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const onPlay = useOnPlay(songs);
  const handleUploadSong = () => {
    if (!user) {
      authModal.onOpen()
      return;
    }
    uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium">Your Playlist</p>
        </div>
        <AiOutlinePlus
          size={24}
          onClick={() => { handleUploadSong(); }}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        { songs.map((song) => (
          <SongItemSideBar key={song.id} onClick={(id) => { onPlay(id); }} data={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;

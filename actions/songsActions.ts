import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { type Song } from '@/types/types';

export const getSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies
  });

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies
  });

  const { data: sessionDate, error: sessionError } = await supabase.auth.getSession()
  if (sessionError) {
    console.log('supabase get sessionData: ', sessionError.message);
    return [];
  }

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .eq('user_id', sessionDate?.session?.user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.log('supabase get songs by Id: ', error.message);
    return [];
  }

  return (data as any) || [];
};

export const getSongsByTitle = async (title: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies
  });

  if (!title) {
    return await getSongs();
  }

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${title}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export const getSongById = async (id: string): Promise<Song> => {
  const supabase = createServerComponentClient({
    cookies
  });

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.log(error.message);
  }

  return (data) || [];
};

export const getLikedSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies
  });

  const {
    data: { session }
  } = await supabase.auth.getSession();

  const { data } = await supabase
    .from('liked_songs')
    .select('*, songs(*)')
    .eq('user_id', session?.user?.id)
    .order('created_at', { ascending: false })

  if (!data) return [];

  return data.map((item) => ({
    ...item.songs
  }))
};

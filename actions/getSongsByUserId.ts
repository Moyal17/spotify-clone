import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { type Song } from '@/types/types';

const getSongsByUserId = async (): Promise<Song[]> => {
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

export default getSongsByUserId;

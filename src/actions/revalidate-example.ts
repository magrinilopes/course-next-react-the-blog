'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Server Action', path);

  revalidateTag('posts');
  revalidateTag('post-rotina-matinal-de-pessoas-altamente-eficazes');
}

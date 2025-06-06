import { postRepository } from '@/repositories/post';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = unstable_cache(
  cache(async () => {
    return await postRepository.findAllPublic();
  }),
  ['posts'],
  {
    tags: ['posts'],
  },
);

export const findPostByIdCached = (slug: string) =>
  unstable_cache(
    cache(async (slug: string) => {
      const post = await postRepository.findById(slug).catch(() => undefined);

      if (!post) notFound();

      return post;
    }),
    ['posts'],
    {
      tags: [`post-${slug}`],
    },
  )(slug);

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository
    .findBySlugPlublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
});

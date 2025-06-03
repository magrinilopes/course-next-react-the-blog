import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostFeatured } from '@/components/PostFeatured';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <div className='min-h-screen text-slate-900 bg-slate-100 dark:bg-slate-800 dark:text-slate-100'>
      <Container>
        <Header />

        <Suspense fallback={<SpinLoader />}>
          <PostFeatured />
        </Suspense>

        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>

        <footer>
          <p className='text-6xl font-bold text-center p-8'>
            Aqui está o footer
          </p>
        </footer>
      </Container>
    </div>
  );
}

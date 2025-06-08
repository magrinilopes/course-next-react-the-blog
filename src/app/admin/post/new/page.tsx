import { ManagePostForm } from '@/components/admin/ManagePostForm';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <h1 className='text-2xl font-bold mb-4 pt-4'>Criar Post</h1>
      <ManagePostForm />
    </>
  );
}

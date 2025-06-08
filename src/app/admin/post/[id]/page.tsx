export const dynamic = 'force-dynamic';

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;
  return <div className='text-6xl py-16'>Admin Post ID: {id}</div>;
}

import type { Metadata } from 'next';
import { MenuAdmin } from '@/components/admin/MenuAdmin';

export const metadata: Metadata = {
  title: {
    default: 'The Blog | Admin',
    template: '%s | The Blog',
  },
  description: 'Esta seria a descrição da página',
};

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default function AdminPostLayout({
  children,
}: Readonly<AdminPostLayoutProps>) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}

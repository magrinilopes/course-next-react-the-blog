'use client';

import clsx from 'clsx';
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = clsx(
    'mb-6 bg-slate-900 text-slate-100 rounded-lg',
    'flex flex-col gap-1 sm:p-2',
    'sm:flex-row sm:flex-wrap sm:h-auto',
    !isOpen && 'h-10',
    !isOpen && 'overflow-hidden',
    'sm:overflow-auto sm:h-auto',
  );
  const linkClasses = clsx(
    '[&>svg]:w-4 [&>svg]:h-4',
    'flex gap-2 items-center px-4',
    'rounded-lg',
    'transition-all duration-200 hover:bg-slate-600',
    'h-10 shrink-0',
    'cursor-pointer',
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    'text-blue-200 italic',
    'sm:hidden',
  );

  function handleToggleMenu() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <nav className={navClasses}>
      <button className={openCloseBtnClasses} onClick={handleToggleMenu}>
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>

      <a className={linkClasses} href='/' target='_blank'>
        <HouseIcon />
        Home
      </a>
      <Link className={linkClasses} href='/admin/post'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/post/new'>
        <PlusIcon />
        Criar Post
      </Link>
    </nav>
  );
}

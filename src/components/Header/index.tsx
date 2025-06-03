'use client';

import clsx from 'clsx';

export function Header() {
  console.log('Header');
  return (
    <h1
      className={clsx(
        'text-xl',
        'font-medium',
        'text-blue-500',
        'hover:text-blue-50',
        'hover:bg-blue-500',
        'transition',
        'duration-200',
        'ease-in-out',
      )}
    >
      Texto do meu H1
    </h1>
  );
}

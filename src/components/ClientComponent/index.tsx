'use client';

export function ClientComponent({ children }: { children: React.ReactNode }) {
  console.log('Client component');
  return <div>Client Component {children}</div>;
}

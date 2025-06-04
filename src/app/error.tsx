'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RootError({ error }: RootErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Erro inexperado na página. Tente novamente mais tarde.'
    />
  );
}

'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('Este é **um* exemplo');

  return (
    <form action=''>
      <div className='flex flex-col gap-4'>
        <InputText labelText='Nome' placeholder='Digite seu nome' />

        <ImageUploader />

        <MarkdownEditor
          labelText='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
        />

        <InputCheckbox
          labelText='Marque abaixo se quiser'
          labelCheck='Meu checkbox'
        />
      </div>
      <div className='flex items-center justify-center mt-4'>
        <Button type='submit'>Botão 1</Button>
      </div>
    </form>
  );
}

'use client';

import { useRef, useState, useTransition } from 'react';
import { Button } from '@/components/Button';
import { ImageUpIcon } from 'lucide-react';
import { IMAGE_UPLOADER_MAX_SIZE } from '@/lib/constants';
import { toast } from 'react-toastify';
import { uploadImageAction } from '@/actions/upload-image-action';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startUploadImagem] = useTransition();
  const [imgUrl, setImgUrl] = useState('');

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();

    if (!fileInputRef.current) {
      setImgUrl('');
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl('');
      return;
    }

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
      toast.error(`Imagem muito grande. Máximo: ${readableMaxSize}KB.`);

      fileInput.value = '';
      setImgUrl('');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    //TODO: Criar a action de envio de arquivo
    startUploadImagem(async () => {
      const result = await uploadImageAction(formData);
      console.log(result);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = '';
        setImgUrl('');
        return;
      }

      setImgUrl(result.url);
      toast.success('Imagem enviada com sucesso!');
    });

    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-4 py-4'>
      <Button
        type='button'
        className='self-start'
        disabled={isUploading}
        onClick={handleChooseFile}
      >
        <ImageUpIcon />
        Enviar imagem
      </Button>

      {!!imgUrl && (
        <div className='flex flex-col gap-4'>
          <p>URL: {imgUrl}</p>

          {/* eslint-disable-next-line */}
          <img className='rounded-lg' src={imgUrl} />
        </div>
      )}

      <input
        onChange={handleChange}
        disabled={isUploading}
        ref={fileInputRef}
        className='hidden'
        type='file'
        name='file'
        accept='image/*'
      />
    </div>
  );
}

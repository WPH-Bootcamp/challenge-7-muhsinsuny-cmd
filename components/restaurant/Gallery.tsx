'use client';

import Image from 'next/image';

interface Props {
  images?: string[];
}

export default function Gallery({ images = [] }: Props) {
  if (images.length === 0) {
    return <div className='mb-8 h-80 w-full rounded-2xl bg-gray-200' />;
  }

  return (
    <section className='mb-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
      <div className='relative md:col-span-2 h-80'>
        <Image
          src={images[0]}
          alt='Restaurant'
          fill
          className='rounded-2xl object-cover'
        />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        {images.slice(1, 4).map((img, i) => (
          <div key={i} className='relative h-36'>
            <Image
              src={img}
              alt={`Gallery ${i}`}
              fill
              className='rounded-2xl object-cover'
            />
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function HeroSection({ search, onSearchChange }: Props) {
  return (
    <section className='relative h-100  bg-cover bg-center w-full md:h-110'>
      <Image
        src='/Image.png'
        width={1920}
        height={800}
        alt='Food'
        className='object-cover  h-150 md:h-217'
        priority
        sizes='50vw'
      />
      <div className='absolute md:h-217 items-center justify-center inset-0 bg-black/60 ' />
      <div className='absolute inset-0 flex h-full w-full items-center justify-center top-1/2'>
        <div className='absolute z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white'>
          <h1 className='mb-2 text-display-lg font-extrabold md:text-4xl'>
            Explore Culinary Experiences
          </h1>
          <p className='mb-10 text-lg-bold font-bold md:text-xl'>
            Search and refine your choice to discover the perfect restaurant.
          </p>

          <div className='flex w-full max-w-xl items-center rounded-full bg-white px-4 py-2 shadow'>
            <Search className='mr-2 text-gray-400' size={18} />
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder='Search restaurants, food, or drinks'
              className='w-full text-sm text-gray-700 outline-none'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

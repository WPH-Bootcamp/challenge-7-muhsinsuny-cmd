'use client';

import { Star, Share2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroDetail({ image }: { image?: string }) {
  return (
    <section className='relative bg-gray-100'>
      {/* Background image */}
      <div className='h-80 w-full'>
        <Image
          src={
            image || 'https://images.unsplash.com/photo-1550547660-d9450f859349'
          }
          alt='Restaurant'
          className='h-full w-full object-cover'
          width={1200}
          height={320}
        />
        <div className='absolute inset-0 bg-black/40' />
      </div>

      {/* Content */}
      <div className='absolute inset-x-0 bottom-0'>
        <div className='mx-auto max-w-7xl px-6 pb-6 text-white'>
          <h1 className='text-3xl font-bold'>Burger King</h1>

          <div className='mt-2 flex flex-wrap items-center gap-4 text-sm'>
            <div className='flex items-center gap-1'>
              <MapPin size={14} />
              <span>Jakarta</span>
            </div>

            <div className='flex items-center gap-1 text-yellow-400'>
              <Star size={14} fill='currentColor' />
              <span className='text-white'>4.8</span>
              <span className='text-gray-200'>(2.4k reviews)</span>
            </div>
          </div>

          <div className='mt-4 flex gap-3'>
            <Button className='bg-white text-black hover:bg-gray-200'>
              Order Now
            </Button>
            <Button
              variant='outline'
              className='border-white text-white hover:bg-white/10'
            >
              <Share2 size={16} className='mr-2' />
              Share
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroDetail;

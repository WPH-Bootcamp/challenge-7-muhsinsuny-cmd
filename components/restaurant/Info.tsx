'use client';

import Image from 'next/image';
import { RestaurantDetail } from '@/types/restaurant';

export default function RestaurantInfo({
  restaurant,
}: {
  restaurant: RestaurantDetail;
}) {
  return (
    <section className='mt-6 flex items-start justify-between'>
      <div className='flex gap-4'>
        {/* Logo */}
        <div className='h-16 w-16 rounded-full bg-white shadow'>
          <Image
            alt={restaurant.name}
            src={restaurant.logo}
            className='h-full w-full rounded-full object-contain'
            width={64}
            height={64}
          />
        </div>

        {/* Info */}
        <div>
          <h1 className='text-2xl font-bold'>{restaurant.name}</h1>
          <p className='text-sm text-gray-500'>{restaurant.place}</p>

          <div className='mt-1 text-sm text-orange-500'>
            ⭐ {restaurant.star}
          </div>
        </div>
      </div>

      {/* Share */}
      <div className='flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-100 '>
        <Image src='/share.png' alt='Share' width={18} height={20} />
        <button className='text-md-bold hover:cursor-pointer text-neutral-950 hover:text-black'>
          Share
        </button>
      </div>
    </section>
  );
}

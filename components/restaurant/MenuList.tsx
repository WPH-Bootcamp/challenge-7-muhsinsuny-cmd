'use client';

import Image from 'next/image';
import { RestaurantDetail } from '@/types/restaurant';

export default function MenuList({
  menus,
}: {
  menus: RestaurantDetail['menus'];
}) {
  return (
    <section className='mb-12'>
      <h2 className='mb-4 text-xl font-semibold'>Menu</h2>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {menus.map((menu) => (
          <>
            <div className='flex flex-col md:flex-col'>
              <div
                key={menu.id}
                className='rounded-xl overflow-hidden bg-white shadow-sm'
              >
                <Image
                  src={menu.image}
                  alt='foodName'
                  className='h-full w-full object-cover'
                  width={150}
                  height={150}
                />
              </div>

              <div className='flex flex-row justify-between h-full items-center px-2 '>
                <div className='p-3 flex flex-col'>
                  <h3 className='text-sm font-semibold'>{menu.foodName}</h3>
                  <p className='font-bold text-sm'>
                    Rp {menu.price.toLocaleString('id-ID')}
                  </p>
                </div>

                {/*  */}
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

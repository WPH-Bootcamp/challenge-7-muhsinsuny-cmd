// import { Button } from '@/components/ui/button';
// import Image from 'next/image';

// const menus = Array.from({ length: 8 });

// export default function MenuList() {
//   return (
//     <section className='mb-12'>
//       <h2 className='mb-4 text-xl font-semibold'>Menu</h2>

//       <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
//         {menus.map((_, i) => (
//           <div key={i} className='rounded-2xl border bg-white p-3 shadow-sm'>
//             <Image
//               src='https://images.unsplash.com/photo-1550547660-d9450f859349'
//               className='h-32 w-full rounded-xl object-cover'
//               alt='Menu Item'
//               width={200}
//               height={200}
//             />

//             <h3 className='mt-3 font-semibold'>Burger Deluxe</h3>
//             <p className='text-sm text-gray-500'>Rp 45.000</p>

//             <Button size='sm' className='mt-3 w-full'>
//               Add
//             </Button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

// import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { RestaurantDetail } from '@/types/restaurant';
// import { useState } from 'react';

export default function MenuList({
  menus,
}: {
  menus: RestaurantDetail['menus'];
}) {
  // const [count, setCount] = useState<Record<number, number>>({});
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

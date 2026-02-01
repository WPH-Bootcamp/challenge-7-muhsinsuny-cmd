'use client';

import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { label: 'All Restaurant', Image: '/1Category.png', link: '/restaurants' },
  { label: 'Nearby', Image: '/2Location.png', link: '/restaurants/nearby' },
  { label: 'Discount', Image: '/3Discount.png', link: '/restaurants/discount' },
  {
    label: 'Best Seller',
    Image: '/4BestSeller.png',
    link: '/restaurants/best-seller',
  },
  { label: 'Delivery', Image: '/5Delivery.png', link: '/restaurants/delivery' },
  { label: 'Lunch', Image: '/6Lunch.png', link: '/restaurants/lunch' },
];

export default function CategoryResto() {
  return (
    <section className='relative mx-auto mt-60  md:mt-130 max-w-6xl rounded-xl w-full'>
      <div className='grid grid-cols-3 gap-4 md:grid-cols-6'>
        {categories.map((item) => (
          <Link
            key={item.label}
            href={item.link}
            className='flex flex-col items-center gap-2 rounded-lg p-3 transition hover:bg-orange-50'
          >
            <Image src={item.Image} alt={item.label} width={40} height={40} />
            <span className='text-xs font-medium text-gray-700'>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

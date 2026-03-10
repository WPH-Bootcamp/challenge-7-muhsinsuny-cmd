import Link from 'next/link';
import Image from 'next/image';
import { Restaurant } from '@/services/queries/restoQueries';

export default function RestaurantInfoCard(data: Restaurant) {
  return (
    <>
      <Link href={`/restaurants/${data.id}`} className='block'>
        <div className='flex flex-row items-center justify-between gap-4 rounded-xl bg-white p-4 shadow hover:cursor-pointer hover:shadow-md transition '>
          <Image
            src={data.logo}
            alt={data.logo}
            width={120}
            height={120}
            className='rounded-full'
          />
          <div className='flex w-full items-center gap-4'>
            <div className='flex-1'>
              <h2 className='text-lg font-semibold'>{data.name}</h2>

              <span>⭐ {data.star}</span>
              <div className='mt-1 flex items-center gap-2 text-sm text-gray-500'>
                <span>{data.place}</span>
                <span>•</span>
                <span>2.4 Km</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

'use client';

// import { useBestSellerQuery } from '@/services/queries/restoQueries';
// import Link from 'next/link';
// import RestaurantCard from '@/components/home/RestaurantCard';
import { useMenusQuery } from '../../services/queries/useMenusQuery';
import RestaurantInfoCard from '../restaurant/RestaurantDetailPage/RestaurantInfoCard';

export default function RecommendedSection() {
  const { data = [], isLoading, isError } = useMenusQuery();

  return (
    <section className='mx-auto max-w-6xl px-4 py-10'>
      <h2 className='mb-6 text-display-xs font-extrabold'>Recommended</h2>

      {isLoading && <p>Loading...</p>}
      {isError && <p className='text-red-500'>Failed to load data</p>}

      {!isLoading && !isError && (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {data.slice(0, 12).map((item) => (
            <RestaurantInfoCard
              key={item.id}
              id={item.id}
              logo={item.logo}
              images={item.images}
              name={item.foodName}
              place={item.place || ''}
              star={item.star}
              menuCount={item.menuCount || 0}
              reviewCount={item.reviewCount || 0}
              category={item.category}
              priceRange={item.priceRange}
            />
          ))}
        </div>
      )}
      {!isLoading && !isError && (
        <div className='mt-4 flex justify-center'>
          <button className='text-md-bold text-neutral-950  w-30.5 h-10 border border-neutral-300 px-2 py-2 rounded-full mx-auto block'>
            Show more
          </button>
        </div>
      )}
    </section>
  );
}

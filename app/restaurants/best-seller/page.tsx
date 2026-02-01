'use client';

import RestaurantInfoCard from '@/components/restaurant/RestaurantDetailPage/RestaurantInfoCard';
import { useBestSellerQuery } from '@/services/queries/restoQueries';
export default function BestSellerPage() {
  const { data = [], isLoading } = useBestSellerQuery();

  if (isLoading) {
    return <div className='p-4'>Loading...</div>;
  }

  return (
    <main className='px-4 py-6'>
      <h1 className='mb-6 text-xl font-semibold'>Best Seller</h1>

      <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        {data.map((item) => (
          <RestaurantInfoCard
            key={item.id}
            id={item.id}
            name={item.name}
            logo={item.logo}
            images={item.images}
            place={item.place || ''}
            star={item.star}
            menuCount={item.menuCount || 0}
            reviewCount={item.reviewCount || 0}
            category={item.category || ''} 
            priceRange={item.priceRange} 
          />
        ))}
      </div>
    </main>
  );
}

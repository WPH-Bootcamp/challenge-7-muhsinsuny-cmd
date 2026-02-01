// app/restaurants/[id]/page.tsx

import { notFound } from 'next/navigation';
import RestaurantInfo from '@/components/restaurant/Info';
import Gallery from '@/components/restaurant/Gallery';
import ReviewList from '@/components/restaurant/ReviewList';
import { RestaurantDetail } from '@/types/restaurant';
import MenuList from '@/components/restaurant/RestaurantDetailPage/MenuList/MenuList';
import { MenuItem } from '@/services/queries/useMenusQuery';

interface PageProps {
  params: {
    id: string;
  };
}

export async function Page({ params }: PageProps) {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/resto/${id}`,
    {
      cache: 'no-store',
    }
  );
  console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);

  if (!res.ok) {
    notFound();
  }

  const result = await res.json();

  const restaurant: RestaurantDetail = result.data;

  if (!restaurant) {
    notFound();
  }

  return (
    <>
      <div className='mx-auto max-w-6xl px-4'>
        <Gallery images={restaurant.images} />
        <RestaurantInfo restaurant={restaurant} />
        <MenuList item={restaurant.menus as unknown as MenuItem[]} />
        <ReviewList reviews={restaurant.reviews ?? []} />
      </div>
    </>
  );
}

export default Page;

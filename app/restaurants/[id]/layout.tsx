'use client';

// import HeroDetail from '@/components/restaurant/HeroDetail';

export default function RestaurantDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <HeroDetail /> */}
      <main className='mx-auto max-w-7xl px-6 py-8'>{children}</main>
    </>
  );
}

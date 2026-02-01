'use client';

import HeroSection from '@/components/home/HeroSection';
import CategoryResto from '@/components/home/CategoryResto';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function RestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <HeroSection search='' onSearchChange={() => {}} />
      <CategoryResto />
      <main className='mx-auto max-w-6xl px-4 py-6'>{children}</main>
      <Footer />
    </>
  );
}

'use client';

import HeroSection from '@/components/home/HeroSection';
import RecommendedSection from '@/components/home/RecommendedSection';
import CategoryResto from '@/components/home/CategoryResto';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <HeroSection search='' onSearchChange={() => {}} />
      <CategoryResto />
      <RecommendedSection />
      <Footer />
    </div>
  );
}

// import { Star } from 'lucide-react';

'use client';

import { Star } from 'lucide-react';
import { RestaurantDetail } from '@/types/restaurant';

export default function ReviewList({
  reviews,
}: {
  reviews: RestaurantDetail['reviews'];
}) {
  return (
    <section className='mb-16'>
      <h2 className='mb-4 md:text-display-lg text-display-xs font-extrabold'>
        Review
      </h2>
      <div className='flex flex-row gap-2 items-center mb-6'>
        <Star size={16} fill='currentColor' className='text-yellow-500' />
        <div className='md:text-xl text-md font-extrabold text-neutral-950'>
          {reviews[0]?.star || 0}
        </div>
        <p className=' md:text-xl text-md font-extrabold text-neutral-950'>
          ({reviews.length} ulasan)
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        {reviews.map((review) => (
          <div key={review.id} className='rounded-2xl border p-4'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-14 h-14 rounded-full overflow-hidden md:h-16 md:w-16'>
                {review.user.avatar || review.user.name ? (
                  <img
                    src={
                      review.user.avatar ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        review.user.name
                      )}`
                    }
                    alt={review.user.name}
                    className='w-full h-full object-cover md:h-16 md:w-16'
                  />
                ) : (
                  <div className='w-full h-full bg-gray-300' />
                )}
              </div>
              <div className='flex flex-col'>
                <p className='font-semibold'>{review.user.name}</p>
                <div>{new Date(review.createdAt).toLocaleString('id-ID')}</div>
              </div>
            </div>
            <div className='flex text-yellow-500 mb-2'>
              {Array.from({ length: review.star }).map((_, i) => (
                <Star key={i} size={14} fill='currentColor' />
              ))}
            </div>
            <p className='text-sm text-gray-600'>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

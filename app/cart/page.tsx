'use client';

import { useCart } from '@/components/providers/CartProvider';
import Image from 'next/image';

export default function MyOrdersPage() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className='p-6 text-center text-gray-500'>
        Keranjang masih kosong
      </div>
    );
  }

  return (
    <div className='p-6'>
      <h1 className='mb-4 text-2xl font-semibold'>My Orders</h1>

      <div className='space-y-4'>
        {cart.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between rounded-lg bg-white p-4 shadow'
          >
            <div className='flex items-center gap-4'>
              <Image
                src={item.image}
                alt={item.name}
                className='h-14 w-14 rounded object-cover'
              />

              <div>
                <p className='font-medium'>{item.name}</p>
                <p className='text-sm text-gray-500'>
                  {item.qty} x Rp{item.price.toLocaleString('id-ID')}
                </p>
              </div>
            </div>

            <p className='font-semibold'>
              Rp{(item.qty * item.price).toLocaleString('id-ID')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

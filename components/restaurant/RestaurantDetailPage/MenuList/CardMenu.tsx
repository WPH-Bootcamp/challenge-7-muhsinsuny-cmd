'use client';

import Image from 'next/image';
import { MenuItem } from '@/services/queries/useMenusQuery';
import { useCart } from '@/components/providers/CartProvider';
import { useAuth } from '@/components/providers/AuthProvider';
import { useRouter } from 'next/navigation';

interface Props {
  data: MenuItem;
}

export default function CardMenu({ data }: Props) {
  const { addToCart, removeFromCart, decreaseQty, getQtyById } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const qty = getQtyById(data.id);
  console.log('Menu Item Data:', data);

  const handleAddToCart = () => {
    if (!user) {
      const redirectTo = window.location.pathname;

      alert('Maaf Anda wajib login untuk memesan menu');
      router.push(`/login?redirect=${redirectTo}`);
      return;
    }
    addToCart(data);
  };

  return (
    <div className='flex flex-col gap-4 justify-between items-stretch rounded-xl bg-white p-3 shadow'>
      {/* Image */}
      <Image
        src={data.image}
        alt='menu image'
        width={285}
        height={285}
        className='rounded-lg object-cover'
      />

      {/* Info */}
      <div className='flex md:flex-row flex-col mt-2 justify-between'>
        {/* Left */}
        <div className='flex flex-col justify-between items-start gap-1'>
          <p className='font-medium text-sm text-neutral-950 md:text-md'>
            {data.foodName ?? 'Nama Menu'}
          </p>
          <p className='md:text-lg text-md font-extrabold text-neutral-950'>
            Rp {data.price?.toLocaleString('id-ID')}
          </p>
        </div>

        {/* Right */}
        <div className='flex items-center'>
          {qty === 0 ? (
            <button
              onClick={() => handleAddToCart()}
              className='rounded-full border border-red-500 mt-4 w-full px-4 py-1 text-md-bold text-white bg-primary-100'
            >
              Add
            </button>
          ) : (
            <div className='flex items-center gap-2'>
              <button
                onClick={() => {
                  if (qty === 1) {
                    removeFromCart(data.id);
                  } else {
                    decreaseQty(data.id);
                  }
                }}
                className='flex h-7 w-7 items-center justify-center rounded-full border border-gray-300'
              >
                −
              </button>

              <span className='min-w-4 text-center text-sm'>{qty}</span>

              <button
                onClick={() => addToCart(data)}
                className='flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white'
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

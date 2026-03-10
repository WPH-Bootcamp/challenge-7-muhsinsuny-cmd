'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import FoodyIcon from '@/components/icons/FoodyIcon';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import { useCart } from '../providers/CartProvider';
import ShoppingIcon from '../icons/ShoppingIcon';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { isLoggedIn, user, logout } = useAuth();
  const { totalQty } = useCart();

  const login = () => {
    router.push('/login');
  };

  const register = () => {
    router.push('/register');
  };

  // ===== SCROLL DETECTION =====
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ===== CLICK OUTSIDE =====
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setOpenProfile(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // ===== STYLES =====
  const navBg = scrolled ? 'bg-white shadow-md' : 'bg-transparent';
  const textColor = scrolled ? 'text-neutral-950' : 'text-white';
  const textColor2 = scrolled ? 'text-primary-100' : 'text-white';
  const borderColor = scrolled ? 'border-neutral-300' : 'border-white';
  const primaryBtn = scrolled
    ? 'bg-primary-100 text-neutral-25'
    : 'bg-white text-neutral-950';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${navBg}`}>
      <div className='max-w-7xl mx-auto px-4 h-16 flex items-center justify-between'>
        {/* LEFT */}
        <div className='flex items-center gap-2 transition-colors '>
          <FoodyIcon className={`w-8 h-8 ${textColor2}`} />
          <span
            className={`font-extrabold hidden md:block text-lg ${textColor}`}
          >
            Foody
          </span>
        </div>

        {/* RIGHT */}
        {!isLoggedIn ? (
          <div className='flex items-center gap-3'>
            <button
              className={`px-6 py-2 rounded-full border-2 transition ${borderColor} ${textColor} hover:cursor-pointer`}
              onClick={login}
            >
              Sign In
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium hover:cursor-pointer transition ${primaryBtn}`}
              onClick={register}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className='flex items-center gap-4'>
            {/* CART */}
            <button
              className='relative cursor-pointer'
              onClick={() => router.push('/my-orders')}
            >
              <ShoppingIcon
                className={`w-8 h-7 ${textColor} text-neutral-700`}
              />
              {totalQty > 0 && (
                <span className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center'>
                  {totalQty}
                </span>
              )}
            </button>

            {/* PROFILE */}
            <div ref={profileRef} className='relative'>
              <button
                onClick={() => setOpenProfile(!openProfile)}
                className='flex items-center gap-4'
              >
                <Image
                  src={user?.avatar || '/Ellipse 3.png'}
                  alt='Profile'
                  width={36}
                  height={36}
                  className='rounded-full object-cover'
                />
                <span
                  className={`hidden text-lg md:block hover:cursor-pointer font-medium ${textColor}`}
                >
                  {user?.name}
                </span>
              </button>

              {openProfile && (
                <div className='absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg overflow-hidden'>
                  <div className='px-4 py-3 border-b flex items-center gap-3'>
                    <Image
                      src={user?.avatar || '/Ellipse 3.png'}
                      alt='Profile'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                    <span className='font-medium'>{user?.name}</span>
                  </div>

                  <ul className='text-sm'>
                    <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer'>
                      Delivery / Address
                    </li>
                    <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer'>
                      My Orders
                    </li>
                    <li
                      onClick={logout}
                      className='px-4 py-3 hover:bg-gray-100 cursor-pointer text-red-500'
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

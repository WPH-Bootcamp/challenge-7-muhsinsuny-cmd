'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import FoodyIcon from '../icons/FoodyIcon';

export function AuthTabs() {
  const pathname = usePathname();
  const isLogin = pathname.includes('/login');
  const isRegister = pathname.includes('/register');

  return (
    <>
      {/* Logo */}
      <div className='flex justify-start gap-3.75 mb-6'>
        <FoodyIcon className='text-primary-100' />
        <span className='text-neutral-950 mb-5 text-display-md font-extrabold'>
          Foody
        </span>
      </div>

      <h2 className='text-2xl font-semibold mb-1 '>Welcome Back</h2>
      <p className='text-sm text-gray-500  mb-5'>
        Good to see you again! Let’s eat
      </p>

      <div className='bg-neutral-100 p-2 rounded-xl h-14 flex mb-6'>
        <Link
          href='/login'
          className={clsx(
            'w-1/2 text-center py-2 h-10 rounded-md text-md font-medium transition',
            isLogin
              ? 'bg-white text-neutral-950 text-md-bold shadow'
              : 'text-neutral-600 font-medium hover:text-neutral-700'
          )}
        >
          Sign in
        </Link>

        <Link
          href='/register'
          className={clsx(
            'w-1/2 text-center mb-5 py-2 h-10 rounded-md text-md-bold font-medium transition',
            isRegister
              ? 'bg-white text-md-bold text-md-bold text-neutral-950 shadow'
              : 'text-neutral-600 font-medium hover:text-neutral-700'
          )}
        >
          Sign up
        </Link>
      </div>
    </>
  );
}

export default AuthTabs;

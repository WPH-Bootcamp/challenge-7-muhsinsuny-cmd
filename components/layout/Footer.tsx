import Image from 'next/image';
import FoodyIcon from '../icons/FoodyIcon';

export default function Footer() {
  return (
    <footer className='bg-black px-6 py-10 text-gray-300'>
      <div className='mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-around md:gap-0'>
        <div className='md:w-1/2 mb-0'>
          <div className='flex items-center justify-start gap-3.75 mb-4'>
            <FoodyIcon className='text-primary-100 h-10.5 w-10.5' />
            <h3 className=' text-display-md font-extrabold text-white'>
              Foody
            </h3>
          </div>
          <p className='text-md-regular text-neutral-25'>
            Enjoy homemade flavors & chef’s signature dishes, freshly prepared
            every day. Order online or visit our nearest branch.
          </p>
          <div>
            <h4 className='mt-10 mb-5 font-semibold text-white'>
              Follow On Social Media
            </h4>
            <div className='flex items-center gap-4'>
              <Image
                src='/FB.png'
                alt='facebook'
                width={40}
                height={40}
                className='hover:text-white hover:cursor-pointer'
              />
              <Image
                src='/IG.png'
                alt='instagram'
                width={40}
                height={40}
                className='hover:text-white hover:cursor-pointer'
              />
              <Image
                src='/Link In.png'
                alt='link in'
                width={40}
                height={40}
                className='hover:text-white hover:cursor-pointer'
              />
              <Image
                src='/Tiktok.png'
                alt='tiktok'
                width={40}
                height={40}
                className='hover:text-white hover:cursor-pointer'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-between w-7/8 md:justify-around md:gap-20'>
          <div>
            <h4 className='mb-2 font-bold text-md text-white'>Explore</h4>
            <ul className='space-y-5 text-sm'>
              <li className='cursor-pointer text-md-regular hover:text-white'>
                All Food
              </li>
              <li className='cursor-pointer text-md-regular hover:text-white'>
                Nearby
              </li>
              <li className='cursor-pointer text-md-regular hover:text-white'>
                Discount
              </li>
              <li className='cursor-pointer text-md-regular hover:text-white'>
                Best Seller
              </li>
              <li className='cursor-pointer text-md-regular hover:text-white'>
                Lunch
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-2 font-bold text-md text-white'>Help</h4>
            <ul className='space-y-5 text-sm'>
              <li className='cursor-pointer text-md-regular hover:text-white'>
                How to Order
              </li>
              <li className='cursor-pointer text-md-regular hover:text-white'>
                Payment Methods
              </li>
              <li className='cursor-pointer text-md-regular hover:text-white'>
                Track My Order
              </li>
              <li className='cursor-pointer text-md-regular hover:text-white'>
                FAQ
              </li>
              <li className='cursor-pointer text-md-regular hover:text-white'>
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='mt-8 border-t border-white/10 pt-4 text-center text-xs text-gray-500'>
        © {new Date().getFullYear()} Foody. All rights reserved.
      </div>
    </footer>
  );
}

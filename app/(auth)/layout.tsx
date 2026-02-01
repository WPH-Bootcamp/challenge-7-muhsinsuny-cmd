'use client';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='min-h-screen   justify-center'>{children}</main>;
}

// components/auth/AuthLayout.tsx
// 'use client';

// import Image from 'next/image';
// import { ReactNode } from 'react';

// interface AuthLayoutProps {
//   children: ReactNode;
// }

// export default function AuthLayout({ children }: AuthLayoutProps) {
//   return (
//     <div className='min-h-screen flex bg-gray-100'>
//       {/* LEFT IMAGE */}
//       <div className='hidden lg:block lg:w-1/2 relative'>
//         <Image
//           src='/images/image 8.png'
//           alt='Food'
//           fill
//           className='object-cover'
//           priority
//           sizes='50vw'
//         />
//       </div>

//       {/* RIGHT FORM */}
//       <div className='w-full lg:w-1/2 flex items-center justify-center bg-white'>
//         <div className='w-full max-w-md px-6 py-10'>{children}</div>
//       </div>
//     </div>
//   );
// }

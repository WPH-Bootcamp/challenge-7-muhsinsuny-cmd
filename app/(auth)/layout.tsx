'use client';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='min-h-screen   justify-center'>{children}</main>;
}

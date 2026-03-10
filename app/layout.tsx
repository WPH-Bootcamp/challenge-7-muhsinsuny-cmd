import './globals.css';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { CartProvider } from '@/components/providers/CartProvider';
import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='id'>
      <body>
        <Providers>
          <AuthProvider>
            <CartProvider>{children}</CartProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}

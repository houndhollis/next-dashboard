import '@/app/ui/global.css';
import { inter, notoSansKr } from '@/app/ui/font';
import RecoilProvider from './config/RecoilProvider';
import ReactQueryProvider from './config/ReactQueryProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <RecoilProvider>
        <html className={`${inter.className} ${notoSansKr.variable} antialiased`} lang="en">
          <body>{children}</body>
        </html>
      </RecoilProvider>
    </ReactQueryProvider>
  );
}

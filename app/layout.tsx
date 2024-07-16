import '@/app/ui/global.css';
import { inter, notoSansKr } from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.className} ${notoSansKr.variable} antialiased`} lang="en">
      <body>{children}</body>
    </html>
  );
}

import {Inter, Noto_Sans_KR, Lusitana} from 'next/font/google';

export const inter = Inter({subsets : ['latin']});

export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-kr',
  display: 'swap',
});

export const lusitana = Lusitana({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


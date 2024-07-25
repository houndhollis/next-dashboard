import "@/app/ui/global.css";
import { Metadata } from "next";
import { inter, notoSansKr } from "@/app/ui/font";
import RecoilProvider from "./config/RecoilProvider";
import ReactQueryProvider from "./config/ReactQueryProvider";

export const metadata: Metadata = {
  title: "이것이 메타 데이터?",
  description: "이것은 설명",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <RecoilProvider>
        <html
          className={`${inter.className} ${notoSansKr.variable} antialiased`}
          lang="en"
        >
          <body>{children}</body>
        </html>
      </RecoilProvider>
    </ReactQueryProvider>
  );
}

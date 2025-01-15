import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

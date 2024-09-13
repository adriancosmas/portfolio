import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import '@/styles/global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="main">
        <div className="children">
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </div>
      </body>
    </html>
  );
}

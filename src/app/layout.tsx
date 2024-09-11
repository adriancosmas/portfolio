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
      <body className="flex flex-col bg-stone-100 w-full mx-auto overflow-x-hidden">
        <div className="min-h-screen lg:px-12 lg:py-6 p-6 w-full flex flex-col text-slate-700">
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </div>
      </body>
    </html>
  );
}

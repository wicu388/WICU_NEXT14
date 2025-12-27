export const metadata = { title: 'WICU – Core UI' };
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

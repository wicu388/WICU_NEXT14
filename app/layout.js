export const metadata = { title: 'WICU Admin' };
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-950 text-white">{children}</body>
    </html>
  );
}

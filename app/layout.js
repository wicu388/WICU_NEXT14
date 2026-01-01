export const metadata = { title: 'WICU – Base Estable' };
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

export const metadata = { title: 'WICU – Arquitectura' };
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "WICU | Plataforma Inteligente",
  description: "Ecosistema digital inteligente impulsado por IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

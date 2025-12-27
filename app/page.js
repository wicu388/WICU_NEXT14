import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">WICU – Fase 2 / Punto 2</h1>
      <p className="text-gray-400 max-w-xl">
        Navegación base, layout sólido y punto de partida para módulos IA y tienda.
      </p>

      <nav className="flex gap-4">
        <a className="px-4 py-2 bg-white text-black rounded-xl">Tienda</a>
        <a className="px-4 py-2 bg-gray-800 rounded-xl">IA</a>
        <a className="px-4 py-2 bg-gray-800 rounded-xl">Admin</a>
      </nav>
    </main>
  );
}

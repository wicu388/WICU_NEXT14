export default function Home() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">WICU – Fase 2 / Punto 4</h1>
      <p className="text-gray-400 max-w-2xl">
        Base completamente estable. Desde aquí se conectan IA, dropshipping,
        pagos y dashboard sin romper producción.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-zinc-900">Tienda</div>
        <div className="p-4 rounded-xl bg-zinc-900">IA</div>
        <div className="p-4 rounded-xl bg-zinc-900">Admin</div>
      </div>
    </main>
  );
}

import { propiedades } from '../data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function DetallePropiedad({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const propiedad = propiedades.find(p => p.id === id);
  if (!propiedad) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="p-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <Link href="/propiedades" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2">
            ← VOLVER AL LISTADO
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
            <img 
              src={propiedad.image} 
              alt={propiedad.propertyName} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Nodo de Red ID::{propiedad.id.padStart(3, '0')}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {propiedad.propertyName}
            </h1>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Precio de Acceso</p>
                <p className="text-4xl font-bold text-slate-900">{propiedad.price}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-100 p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold">{propiedad.rooms}</p>
                  <p className="text-xs text-slate-400 uppercase">Habitaciones</p>
                </div>
                <div className="border border-slate-100 p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold">{propiedad.baths}</p>
                  <p className="text-xs text-slate-400 uppercase">Baños</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-slate-500 italic mb-1">{propiedad.address}</p>
                <p className="text-slate-900 font-medium uppercase tracking-wider">{propiedad.city}</p>
              </div>

              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg shadow-blue-100 mt-8">
                ESTABLECER CONEXIÓN
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
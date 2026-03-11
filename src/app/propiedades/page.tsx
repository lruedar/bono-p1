import Link from 'next/link';
import { propiedades } from './data';

export default function ListaPropiedades() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] p-6 md:p-12 lg:p-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Directorio de Propiedades</h1>
          <div className="h-1 w-20 bg-blue-600 mt-6 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propiedades.map((prop) => (
            <Link href={`/propiedades/${prop.id}`} key={prop.id} className="group">
              <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                  <img 
                    src={prop.image} 
                    alt={prop.propertyName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-800">{prop.city}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {prop.propertyName}
                  </h2>
                  <p className="text-2xl font-mono font-medium text-slate-900 mb-6">{prop.price}</p>

                  <div className="flex items-center justify-between border-t border-slate-50 pt-4 text-sm text-slate-500 font-light">
                    <div className="flex gap-4">
                      <span>{prop.rooms} Hab.</span>
                      <span>{prop.baths} Baños</span>
                    </div>
                    {prop.garage && <span className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold uppercase">Garaje</span>}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
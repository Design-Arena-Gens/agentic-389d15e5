export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-4xl border border-primary-100 bg-gradient-to-br from-white via-primary-50/60 to-blue-50/40 p-10 shadow-panel">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(29,127,255,0.12),_transparent_55%)]" />
      <div className="relative z-10 flex flex-col gap-4">
        <span className="w-fit rounded-full border border-primary-200 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
          Prompts Studio Photo Pro
        </span>
        <h1 className="text-3xl font-bold text-base-900 md:text-4xl">
          Version Ultra-Stable — Série de prompts photo premium carrés 1:1
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-base-600">
          Alignez vos rendus IA sur une ligne directrice photo professionnelle
          ultra-cohérente : cadrage carré, simulation iPhone 15 Pro, lumière
          naturelle douce, respect total des textes et textures. Configurez vos
          paramètres une fois, générez quatre idées parfaitement harmonisées.
        </p>
      </div>
    </section>
  );
}

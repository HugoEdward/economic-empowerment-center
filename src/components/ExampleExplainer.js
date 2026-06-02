export default function ExampleExplainer({ children }) {
  return (
    <section className="py-6 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="bg-navy-800 border border-gold/15 rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">What This Example Means</p>
          <p className="text-[12px] text-surface-secondary leading-relaxed">{children}</p>
        </div>
      </div>
    </section>
  );
}

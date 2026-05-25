export default function Home() {
  return (
    <main className="p-12">
      <p className="text-xs uppercase tracking-widest font-semibold text-teal-dark">
        Test setup
      </p>
      <h1 className="mt-4">Mettry — setup OK</h1>
      <p className="mt-4 max-w-prose text-ink-secondary">
        Si ce titre est en Red Hat Display, ce paragraphe en Inter, et que la
        couleur teal-dark de l'eyebrow s'affiche bien, on est bons pour la
        Phase 1.
      </p>
      <p className="mt-4 font-mono text-sm text-ink-tertiary">
        font-mono test · JetBrains Mono
      </p>
      <div className="mt-8 flex gap-4">
        <div className="h-16 w-16 rounded-card bg-teal shadow-card" />
        <div className="h-16 w-16 rounded-card bg-teal-deeper shadow-card" />
        <div className="h-16 w-16 rounded-card bg-orange shadow-card" />
        <div className="h-16 w-16 rounded-card bg-bg-off-white border border-border-default" />
      </div>
    </main>
  );
}
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface Integration {
    initial: string;
    name: string;
    desc: string;
    color: string;
    status: "live" | "soon";
}

const INTEGRATIONS: Integration[] = [
    { initial: "E", name: "Enedis", desc: "Synchronisation des PDL via Data Connect", color: "#3498DB", status: "live" },
    { initial: "G", name: "GRDF", desc: "Récupération des index PCE quotidiens", color: "#1F8A5B", status: "live" },
    { initial: "O", name: "OPERAT", desc: "Export Décret Tertiaire conforme ADEME", color: "#0D4A4D", status: "live" },
    { initial: "X", name: "Excel / CSV", desc: "Import & export pour tous vos modules", color: "#107C41", status: "live" },
    { initial: "O", name: "Outlook", desc: "Synchro calendrier interventions", color: "#0078D4", status: "live" },
    { initial: "S", name: "Slack", desc: "Notifications tickets et alertes énergie", color: "#4A154B", status: "live" },
    { initial: "S", name: "SAP", desc: "Connecteur ERP pour les groupes", color: "#0F3D63", status: "soon" },
    { initial: "A", name: "API publique", desc: "REST + Webhooks pour vos intégrations", color: "#058985", status: "live" },
];

export function IntegrationsSection() {
    return (
        <section
            id="integrations"
            className="border-t border-border-default"
            style={{
                background: "var(--color-bg-off-white)",
                paddingTop: "var(--section-y)",
                paddingBottom: "var(--section-y)",
            }}
        >
            <Container>
                <div className="max-w-3xl mb-12">
                    <Eyebrow>Intégrations</Eyebrow>
                    <RevealOnScroll>
                        <h2 className="mt-6">Connecté à vos outils existants.</h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.1}>
                        <p className="mt-5 text-lg max-w-[56ch]">
                            Mettry parle avec vos systèmes en place — pas de migration au big bang,
                            pas de double saisie, pas de friction.
                        </p>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {INTEGRATIONS.map((it, i) => (
                        <RevealOnScroll key={it.name} delay={(i % 4) * 0.06}>
                            <div className="h-full bg-white border border-border-default rounded-card p-5">
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="w-11 h-11 rounded-md flex items-center justify-center text-white font-bold"
                                        style={{ background: it.color, fontFamily: "var(--font-display)" }}
                                        aria-hidden="true"
                                    >
                                        {it.initial}
                                    </div>
                                    {it.status === "live" ? (
                                        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-success">
                                            <span
                                                className="w-1.5 h-1.5 rounded-full bg-success"
                                                style={{ animation: "pulseDot 2s ease-in-out infinite" }}
                                            />
                                            Live
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center text-[10px] uppercase tracking-wider font-semibold text-ink-tertiary bg-bg-off-white px-2 py-0.5 rounded-full">
                                            Bientôt
                                        </span>
                                    )}
                                </div>
                                <div className="text-base font-bold mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                                    {it.name}
                                </div>
                                <p className="text-[14px] leading-relaxed">{it.desc}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}
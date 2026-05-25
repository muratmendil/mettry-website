import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/contact/ContactForm";
import { DemoButtonClient } from "@/components/contact/DemoButtonClient";

export const metadata = {
    title: "Contact",
    description:
        "Une question, un projet, une demande presse ? L'équipe Mettry vous répond sous 24 heures ouvrées.",
};

export default function ContactPage() {
    return (
        <Section>
            <Container>
                <div className="max-w-3xl mb-14">
                    <Eyebrow>Contact</Eyebrow>
                    <h1 className="mt-6">Une question, un projet ?</h1>
                    <p className="mt-6 text-lg lg:text-xl max-w-[56ch]">
                        Notre équipe vous répond sous 24 heures ouvrées. Pour une démo
                        personnalisée, préférez le bouton dédié dans la navigation — vous
                        gagnerez du temps.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
                    {/* Form */}
                    <div
                        className="bg-white border border-border-default rounded-card p-7 lg:p-8"
                        style={{ boxShadow: "var(--shadow-card)" }}
                    >
                        <ContactForm />
                    </div>

                    {/* Infos */}
                    <aside className="flex flex-col gap-5">
                        <InfoCard icon={Mail} title="Email">
                            <a href="mailto:contact@mettry.io" className="text-[var(--accent-dark)] hover:underline">
                                contact@mettry.io
                            </a>
                            <span className="block text-xs text-ink-tertiary mt-1">
                                Réponse sous 24h ouvrées
                            </span>
                        </InfoCard>

                        <InfoCard icon={Phone} title="Téléphone">
                            <a href="tel:+33472000000" className="text-[var(--accent-dark)] hover:underline">
                                +33 4 72 00 00 00
                            </a>
                            <span className="block text-xs text-ink-tertiary mt-1">
                                Lun–Ven · 9h–18h
                            </span>
                        </InfoCard>

                        <InfoCard icon={MapPin} title="Bureaux">
                            <span>15 rue des halles</span>
                            <span className="block">75001 Paris</span>
                        </InfoCard>

                        {/* Pré-CTA démo */}
                        <div
                            className="rounded-card p-6 text-white relative overflow-hidden"
                            style={{ background: "linear-gradient(180deg, #0F5559 0%, #0A3A3D 100%)" }}
                        >
                            <div
                                className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                                style={{
                                    background: "radial-gradient(circle, rgba(245,160,66,0.22), transparent 65%)",
                                    filter: "blur(30px)",
                                }}
                                aria-hidden="true"
                            />
                            <h3 className="relative text-white mb-3 text-xl">
                                Préférez-vous une démo directe ?
                            </h3>
                            <p className="relative text-sm text-white/75 mb-5">
                                30 minutes avec un expert qui connaît votre métier.
                            </p>
                            <DemoButtonClient />
                        </div>
                    </aside>
                </div>
            </Container>
        </Section>
    );
}

function InfoCard({
    icon: Icon,
    title,
    children,
}: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-4 bg-white border border-border-default rounded-card p-5">
            <div
                className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-light)" }}
            >
                <Icon size={18} className="text-[var(--accent-dark)]" />
            </div>
            <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-ink-tertiary mb-1.5">
                    {title}
                </div>
                <div className="text-sm font-medium text-ink-primary">{children}</div>
            </div>
        </div>
    );
}
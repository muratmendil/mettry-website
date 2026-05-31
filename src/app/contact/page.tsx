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
        <>
            {/* Hero centré sur fond off-white — pattern unifié avec les autres pages */}
            <section style={{ background: "var(--color-bg-off-white)" }} className="relative overflow-hidden py-20 lg:py-28">
                <div
                    className="absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(5,137,133,0.08), transparent 60%)",
                        filter: "blur(60px)",
                    }}
                    aria-hidden="true"
                />
                <Container>
                    <div className="relative max-w-3xl mx-auto text-center">
                        <Eyebrow>Contact</Eyebrow>
                        <h1 className="mt-6">Parlons de votre projet.</h1>
                        <p className="mt-6 text-lg lg:text-xl max-w-[56ch] mx-auto">
                            Une question, un cas d&apos;usage particulier, un devis ? On vous répond sous 24h ouvrées.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Corps : form + infos sur fond blanc */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
                        {/* Form */}
                        <div
                            className="bg-white border border-border-default rounded-card p-7 lg:p-8"
                            style={{ boxShadow: "var(--shadow-card)" }}
                        >
                            <h2 className="text-2xl mb-6" style={{ letterSpacing: "-0.018em" }}>
                                Envoyer un message
                            </h2>
                            <ContactForm />
                        </div>

                        {/* Sidebar */}
                        <aside className="flex flex-col gap-5">
                            <div className="bg-white border border-border-default rounded-card p-7">
                                <h2 className="text-xl mb-5" style={{ letterSpacing: "-0.018em" }}>
                                    Nous joindre
                                </h2>

                                <InfoRow icon={MapPin}>
                                    15 rue des Halles, 75001 Paris
                                </InfoRow>

                                <InfoRow icon={Mail}>
                                    <a href="mailto:contact@mettry.io" className="text-[var(--accent-dark)] hover:underline">
                                        contact@mettry.io
                                    </a>
                                </InfoRow>

                                <InfoRow icon={Phone} last>
                                    <a href="tel:+33611776078" className="text-[var(--accent-dark)] hover:underline">
                                        +33 6 11 77 60 78
                                    </a>
                                </InfoRow>
                            </div>

                            {/* Pré-CTA démo */}
                            <div
                                className="rounded-card p-7 text-white relative overflow-hidden"
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
                                    30 min en visio, sans engagement. Bien plus efficace qu&apos;un email aller-retour.
                                </p>
                                <DemoButtonClient />
                            </div>
                        </aside>
                    </div>
                </Container>
            </Section>
        </>
    );
}

function InfoRow({
    icon: Icon,
    children,
    last,
}: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    children: React.ReactNode;
    last?: boolean;
}) {
    return (
        <div className={`flex items-center gap-3 py-3 ${last ? "" : "border-b border-border-default"}`}>
            <div
                className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-light)" }}
            >
                <Icon size={16} className="text-[var(--accent-dark)]" />
            </div>
            <div className="text-sm text-ink-primary">{children}</div>
        </div>
    );
}
import { Handshake, ArrowRight, BadgeCheck, Coins } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FinalCTA } from "@/components/home/FinalCTA";
import Link from "next/link";

export const metadata = {
    title: "Programme prescripteurs · Mettry",
    description: "Vous accompagnez des organisations dans leur transformation immobilière ? Recommandez Mettry et soyez rémunéré sur les contrats signés.",
};

const STEPS = [
    {
        num: "01",
        icon: Handshake,
        title: "Vous recommandez",
        desc: "Vous nous présentez une organisation qui pourrait bénéficier de Mettry. Un email d'introduction suffit.",
    },
    {
        num: "02",
        icon: BadgeCheck,
        title: "L'organisation souscrit",
        desc: "Si elle devient cliente dans les 6 mois suivant votre introduction, vous êtes associé au contrat.",
    },
    {
        num: "03",
        icon: Coins,
        title: "Vous êtes rémunéré",
        desc: "15% du montant annuel du contrat, versé en une fois à la signature, par virement bancaire.",
    },
];

export default function PrescripteursPage() {
    return (
        <>
            <Section>
                <Container>
                    <div className="max-w-3xl">
                        <Eyebrow>Programme prescripteurs</Eyebrow>
                        <RevealOnScroll>
                            <h1 className="mt-6">Recommandez Mettry, soyez rémunéré.</h1>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.1}>
                            <p className="mt-6 text-lg lg:text-xl max-w-[56ch]">
                                Vous êtes consultant, AMO, économiste de la construction, intégrateur ?
                                Nos clients vous citent souvent comme source de la recommandation. Formalisons ça.
                            </p>
                        </RevealOnScroll>
                        <div className="mt-8">
                            <Link href="/contact">
                                <Button size="lg">
                                    Rejoindre le programme <ArrowRight size={18} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>

            <section className="bg-bg-off-white border-y border-border-default" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
                <Container>
                    <div className="max-w-3xl mb-12">
                        <Eyebrow>Comment ça marche</Eyebrow>
                        <RevealOnScroll>
                            <h2 className="mt-6">Trois étapes, zéro complexité.</h2>
                        </RevealOnScroll>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {STEPS.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <RevealOnScroll key={s.num} delay={i * 0.08}>
                                    <div className="h-full bg-white border border-border-default rounded-card p-7 relative">
                                        <div
                                            className="text-xs uppercase tracking-wider font-semibold text-[var(--accent-dark)] mb-4"
                                            style={{ fontFamily: "var(--font-mono)" }}
                                        >
                                            {s.num} / 03
                                        </div>
                                        <div
                                            className="w-12 h-12 rounded-card flex items-center justify-center mb-5"
                                            style={{ background: "var(--accent-light)" }}
                                        >
                                            <Icon size={22} className="text-[var(--accent-dark)]" />
                                        </div>
                                        <h3 className="mb-3 text-xl">{s.title}</h3>
                                        <p className="text-[15px] leading-relaxed">{s.desc}</p>
                                    </div>
                                </RevealOnScroll>
                            );
                        })}
                    </div>

                    <div className="mt-14 max-w-2xl mx-auto text-center">
                        <p className="text-sm text-ink-secondary mb-5">
                            Programme accessible à tous les professionnels ayant un statut juridique permettant l&apos;émission d&apos;une facture. Pas de plafond, pas d&apos;exclusivité requise.
                        </p>
                        <Link href="/contact">
                            <Button>Devenir prescripteur</Button>
                        </Link>
                    </div>
                </Container>
            </section>

            <FinalCTA />
        </>
    );
}
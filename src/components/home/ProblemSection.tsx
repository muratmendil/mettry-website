import { AlertCircle, Wrench, Database, Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const PROBLEMS = [
    {
        num: "01",
        icon: Wrench,
        title: "Abonnements qui s'accumulent",
        body: "GMAO, suivi énergétique, ticketing, GED, contrats… Quatre outils, quatre licences, quatre supports. Et personne ne sait combien ça coûte vraiment.",
        cost: "+€18 000 / an",
    },
    {
        num: "02",
        icon: Database,
        title: "Données éparpillées",
        body: "Les index GRDF dans un Excel, les tickets dans un email, les contrats dans un Drive. Impossible de tirer un reporting global sans tout reconstruire à la main.",
        cost: "+45h / mois",
    },
    {
        num: "03",
        icon: Clock,
        title: "Heures en re-saisie",
        body: "Chaque mois, votre équipe ressaisit les mêmes données dans plusieurs systèmes pour produire le rapport de direction. Erreurs et frustration garanties.",
        cost: "+30% d'erreurs",
    },
];

export function ProblemSection() {
    return (
        <Section>
            <Container>
                <div className="max-w-3xl mb-14">
                    <Eyebrow>Le problème</Eyebrow>
                    <RevealOnScroll>
                        <h2 className="mt-6">
                            Vous gérez un parc de bâtiments avec 4 outils différents.{" "}
                            <span className="text-ink-tertiary">Et ça coûte cher.</span>
                        </h2>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                    {PROBLEMS.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <RevealOnScroll key={p.num} delay={i * 0.08}>
                                <article className="relative h-full bg-white border border-border-default rounded-card p-7 hover:-translate-y-1 transition-transform duration-300 hover:shadow-[var(--shadow-card)]">
                                    <div className="flex items-start justify-between mb-6">
                                        <span
                                            className="text-xs font-semibold text-ink-tertiary tracking-wider"
                                            style={{ fontFamily: "var(--font-mono)" }}
                                        >
                                            {p.num} / 03
                                        </span>
                                        <Icon size={20} className="text-ink-tertiary" />
                                    </div>
                                    <h3 className="mb-3">{p.title}</h3>
                                    <p className="text-[15px] leading-relaxed">{p.body}</p>
                                    <div className="mt-6 pt-4 border-t border-border-default flex items-center gap-2">
                                        <AlertCircle size={14} className="text-error" />
                                        <span className="text-sm font-semibold text-error tabular-nums">{p.cost}</span>
                                    </div>
                                </article>
                            </RevealOnScroll>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
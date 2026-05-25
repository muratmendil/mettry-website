import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface Props {
    eyebrow: string;
    title: string;
    updated: string;
    children: React.ReactNode;
}

export function LegalLayout({ eyebrow, title, updated, children }: Props) {
    return (
        <Section>
            <Container>
                <div className="max-w-2xl mx-auto">
                    <Eyebrow>{eyebrow}</Eyebrow>
                    <h1 className="mt-6 mb-3">{title}</h1>
                    <p className="text-sm text-ink-tertiary mb-10">Dernière mise à jour : {updated}</p>
                    <div className="prose-mettry flex flex-col gap-6 text-[16px] leading-relaxed">
                        {children}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
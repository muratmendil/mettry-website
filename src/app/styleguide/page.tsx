import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { MettryLogo } from "@/components/ui/MettryLogo";
import { BrowserChrome } from "@/components/ui/BrowserChrome";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function StyleguidePage() {
    return (
        <main>
            <Section>
                <Container>
                    <Eyebrow>Styleguide</Eyebrow>
                    <h1 className="mt-6">Primitives UI</h1>
                    <p className="mt-4 max-w-prose">
                        Validation visuelle de la Phase 1. Si tout s'affiche correctement,
                        on attaque le chrome (Navbar, Footer, DemoModal).
                    </p>
                </Container>
            </Section>

            <Section tight className="bg-bg-off-white border-y border-border-default">
                <Container>
                    <h2 className="mb-8">Logo</h2>
                    <div className="flex items-center gap-8 flex-wrap">
                        <MettryLogo size={24} />
                        <MettryLogo size={32} />
                        <MettryLogo size={48} />
                        <MettryLogo variant="glyph" size={40} />
                        <div className="bg-teal-deeper p-6 rounded-card">
                            <MettryLogo size={32} variant="full" color="#FFFFFF" />
                        </div>
                    </div>
                </Container>
            </Section>

            <Section tight>
                <Container>
                    <h2 className="mb-8">Buttons</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 flex-wrap">
                            <Button>Demander une démo</Button>
                            <Button variant="ghost">Voir les tarifs</Button>
                            <Button variant="outline">En savoir plus</Button>
                        </div>
                        <div className="flex items-center gap-4 flex-wrap">
                            <Button size="sm">Small</Button>
                            <Button>Default</Button>
                            <Button size="lg">Large</Button>
                        </div>
                        <div className="bg-teal-deeper p-8 rounded-card">
                            <Button variant="on-dark">Bouton sur fond foncé</Button>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section tight className="bg-bg-off-white border-y border-border-default">
                <Container>
                    <h2 className="mb-8">Badges</h2>
                    <div className="flex items-center gap-3 flex-wrap">
                        <Badge withDot>Nouveau</Badge>
                        <Badge tone="orange">Beta</Badge>
                        <Badge tone="success" withDot>
                            Live
                        </Badge>
                        <Eyebrow>Eyebrow style</Eyebrow>
                    </div>
                </Container>
            </Section>

            <Section tight>
                <Container>
                    <h2 className="mb-8">Browser Chrome</h2>
                    <BrowserChrome>
                        <div className="h-64 bg-gradient-to-br from-teal-xlight to-white p-8 flex items-center justify-center text-ink-tertiary">
                            Contenu du mock ici
                        </div>
                    </BrowserChrome>
                </Container>
            </Section>

            <Section tight className="bg-bg-off-white border-y border-border-default">
                <Container>
                    <h2 className="mb-8">Reveal on scroll (recharge la page et scroll)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <RevealOnScroll>
                            <div className="bg-white p-6 rounded-card shadow-card border border-border-default">
                                <h3>Carte 1</h3>
                                <p className="mt-2">Apparaît au scroll.</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.12}>
                            <div className="bg-white p-6 rounded-card shadow-card border border-border-default">
                                <h3>Carte 2</h3>
                                <p className="mt-2">Apparaît 120ms après.</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.24}>
                            <div className="bg-white p-6 rounded-card shadow-card border border-border-default">
                                <h3>Carte 3</h3>
                                <p className="mt-2">Apparaît 240ms après.</p>
                            </div>
                        </RevealOnScroll>
                    </div>
                    <div className="h-[80vh]" aria-hidden="true" />
                    <RevealOnScroll>
                        <p className="mt-8">Cet élément apparaît plus bas — scroll pour voir.</p>
                    </RevealOnScroll>
                </Container>
            </Section>
        </main>
    );
}
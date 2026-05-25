import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata = { title: "CGU · Mettry" };

export default function CGUPage() {
    return (
        <LegalLayout eyebrow="Légal" title="Conditions générales d'utilisation" updated="15 avril 2026">
            <section>
                <p>Les présentes Conditions Générales d&apos;Utilisation régissent l&apos;utilisation de la plateforme Mettry, accessible à l&apos;adresse app.mettry.io.</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">1. Acceptation</h2>
                <p>En accédant à la plateforme, vous acceptez sans réserve les présentes CGU. Si vous n&apos;êtes pas d&apos;accord, vous devez vous abstenir d&apos;utiliser le service.</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">2. Description du service</h2>
                <p>Mettry est une plateforme SaaS de pilotage de patrimoine immobilier permettant la gestion de tickets, ordres de travail, suivi énergétique, documents et contrats.</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">3. Responsabilité</h2>
                <p>Mettry s&apos;engage à fournir un service avec un taux de disponibilité conforme au plan souscrit (SLA). En cas d&apos;indisponibilité dépassant les seuils contractuels, des avoirs sont automatiquement émis.</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">4. Résiliation</h2>
                <p>Vous pouvez résilier votre abonnement à tout moment depuis votre interface de gestion ou par email à hello@mettry.io, avec un préavis d&apos;un mois.</p>
            </section>
            <section>
                <p className="text-sm text-ink-tertiary">Document à compléter avec un juriste avant publication officielle. Ce contenu est une trame de référence.</p>
            </section>
        </LegalLayout>
    );
}
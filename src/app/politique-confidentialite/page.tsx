import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata = { title: "Politique de confidentialité · Mettry" };

export default function PrivacyPage() {
    return (
        <LegalLayout eyebrow="Légal" title="Politique de confidentialité" updated="15 avril 2026">
            <section>
                <p>Mettry est conforme au RGPD. Cette politique explique quelles données nous collectons, pourquoi, et comment vous pouvez exercer vos droits.</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">Données collectées</h2>
                <p>Nous collectons : nom, email professionnel, organisation, données métier relatives à votre patrimoine immobilier (bâtiments, équipements, consommations, contrats). Aucune donnée personnelle d&apos;occupant n&apos;est collectée sans son consentement.</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">Hébergement</h2>
                <p>Toutes vos données sont hébergées en France (OVHcloud Strasbourg). Aucun transfert hors UE n&apos;est effectué.</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">Vos droits</h2>
                <p>Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition, de portabilité et de limitation. Pour exercer ces droits, écrivez à dpo@mettry.io.</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">Cookies</h2>
                <p>Nous utilisons uniquement des cookies fonctionnels strictement nécessaires au fonctionnement du service. Aucun cookie publicitaire n&apos;est déposé.</p>
            </section>
        </LegalLayout>
    );
}
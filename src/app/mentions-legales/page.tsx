import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
    return (
        <LegalLayout eyebrow="Légal" title="Mentions légales" updated="15 avril 2026">
            <section>
                <h2 className="text-2xl mb-3">Éditeur</h2>
                <p>Mettry SAS — capital de 50 000 €</p>
                <p>RCS Lyon 893 456 789</p>
                <p>SIRET : 893 456 789 00012</p>
                <p>15 rue des halles, 75001 Paris</p>
                <p>Email : contact@mettry.io</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">Directeur de la publication</h2>
                <p>Alexandre M., Président</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">Hébergement</h2>
                <p>OVHcloud — 2 rue Kellermann, 59100 Roubaix, France</p>
            </section>
            <section>
                <h2 className="text-2xl mb-3">Propriété intellectuelle</h2>
                <p>L&apos;ensemble du contenu du site mettry.io (textes, images, logos, code) est protégé par le droit d&apos;auteur. Toute reproduction sans autorisation est interdite.</p>
            </section>
        </LegalLayout>
    );
}
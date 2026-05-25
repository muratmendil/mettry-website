import { FeaturesContent } from "@/components/features/FeaturesContent";

export const metadata = {
    title: "Fonctionnalités · Mettry",
    description:
        "GMAO, suivi énergétique, Décret Tertiaire, ticketing, GED, contrats, planning — découvrez tous les modules de la plateforme Mettry.",
};

interface Props {
    searchParams: Promise<{ module?: string }>;
}

export default async function FonctionnalitesPage({ searchParams }: Props) {
    const params = await searchParams;
    return <FeaturesContent initialModule={params.module} />;
}
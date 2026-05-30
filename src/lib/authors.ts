export interface BlogAuthor {
    id: string;
    name: string;
    role: string;
    bio: string;
    initials: string;
    /** Couleur du gradient avatar */
    color: string;
}

export const AUTHORS: Record<string, BlogAuthor> = {
    emilin: {
        id: "emilin",
        name: "Émile Lin",
        role: "Co-fondateur · Expert FM",
        bio: "15 ans dans la maintenance technique du bâtiment, dont 8 à diriger un service patrimoine sur 35 sites. Convaincu qu'une bonne GMAO doit d'abord servir les techniciens.",
        initials: "ÉL",
        color: "#058985",
    },
    alexm: {
        id: "alexm",
        name: "Alexandre Marchal",
        role: "CEO · Co-fondateur",
        bio: "Ancien directeur du patrimoine d'une foncière tertiaire. HEC Paris. Mettry est né d'une frustration personnelle face aux outils du marché.",
        initials: "AM",
        color: "#0D4A4D",
    },
    juliebr: {
        id: "juliebr",
        name: "Julien Bertaux",
        role: "COO · Co-fondateur",
        bio: "Ex-consultant énergie chez Schneider Electric. Pilote du module Décret Tertiaire de Mettry.",
        initials: "JB",
        color: "#7A5AE0",
    },
};

export function getAuthor(id: string): BlogAuthor {
    return AUTHORS[id] ?? AUTHORS.emilin;
}
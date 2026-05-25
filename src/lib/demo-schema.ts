import { z } from "zod";

export const ROLES = [
    "Directeur·rice du patrimoine",
    "Responsable maintenance / FM",
    "Responsable énergie",
    "Direction générale",
    "DSI / SI métier",
    "Autre",
] as const;

export const PARC_SIZES = [
    "1 à 5 bâtiments",
    "6 à 20 bâtiments",
    "21 à 50 bâtiments",
    "51 à 100 bâtiments",
    "100+ bâtiments",
] as const;

export const demoStep1Schema = z.object({
    name: z.string().min(2, "Indiquez votre nom"),
    email: z.string().email("Email invalide"),
    organization: z.string().min(2, "Indiquez votre organisation"),
    role: z.enum(ROLES, { message: "Sélectionnez votre rôle" }),
    parcSize: z.enum(PARC_SIZES, { message: "Sélectionnez la taille du parc" }),
});

export const demoStep3Schema = z.object({
    rgpd: z.literal(true, { message: "Vous devez accepter la politique de confidentialité" }),
});

export const demoFullSchema = demoStep1Schema.extend({
    date: z.string().min(1, "Choisissez une date"),
    time: z.string().min(1, "Choisissez un créneau"),
    rgpd: z.literal(true),
});

export type DemoStep1 = z.infer<typeof demoStep1Schema>;
export type DemoFull = z.infer<typeof demoFullSchema>;
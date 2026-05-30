import { format } from "date-fns";
import { fr } from "date-fns/locale";

/** "26 mai 2026" */
export function formatDateFr(iso: string): string {
    if (!iso) return "";
    try {
        return format(new Date(iso), "d MMMM yyyy", { locale: fr });
    } catch {
        return iso;
    }
}

/** "26 mai" — version courte */
export function formatDateFrShort(iso: string): string {
    if (!iso) return "";
    try {
        return format(new Date(iso), "d MMM yyyy", { locale: fr });
    } catch {
        return iso;
    }
}
const MONTHS_SHORT = [
    "janv.", "févr.", "mars", "avr.", "mai", "juin",
    "juil.", "août", "sept.", "oct.", "nov.", "déc.",
];

const DAYS_SHORT = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];

export interface DemoDateSlot {
    /** Clé unique format YYYY-MM-DD pour la sélection */
    key: string;
    /** ex: "lun." */
    dayShort: string;
    /** ex: "23" */
    dayNum: string;
    /** ex: "déc." */
    monthShort: string;
    /** Format français lisible "lundi 23 décembre" pour le récap */
    readable: string;
}

const MONTHS_LONG = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

const DAYS_LONG = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

/** Génère 8 prochains jours ouvrés à partir de demain. */
export function generateDemoDates(count = 8): DemoDateSlot[] {
    const slots: DemoDateSlot[] = [];
    const d = new Date();
    d.setDate(d.getDate() + 1); // à partir de demain

    while (slots.length < count) {
        const day = d.getDay();
        // Skip weekend (0 = dim, 6 = sam)
        if (day !== 0 && day !== 6) {
            const yyyy = d.getFullYear();
            const mm = String(d.getMonth() + 1).padStart(2, "0");
            const dd = String(d.getDate()).padStart(2, "0");
            slots.push({
                key: `${yyyy}-${mm}-${dd}`,
                dayShort: DAYS_SHORT[day],
                dayNum: String(d.getDate()),
                monthShort: MONTHS_SHORT[d.getMonth()],
                readable: `${DAYS_LONG[day]} ${d.getDate()} ${MONTHS_LONG[d.getMonth()]}`,
            });
        }
        d.setDate(d.getDate() + 1);
    }

    return slots;
}

export const DEMO_TIMESLOTS = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00",
];
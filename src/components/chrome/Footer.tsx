import Link from "next/link";
import { MettryLogo } from "@/components/ui/MettryLogo";

const COLUMNS = [
    {
        title: "Produit",
        links: [
            { href: "/fonctionnalites", label: "Fonctionnalités" },
            { href: "/tarifs", label: "Tarifs" },
            { href: "/solutions", label: "Solutions" },
            { href: "/fonctionnalites#integrations", label: "Intégrations" },
        ],
    },
    {
        title: "Ressources",
        links: [
            { href: "/blog", label: "Blog" },
            { href: "/blog?cat=decret-tertiaire", label: "Décret Tertiaire" },
            { href: "/blog?cat=guides", label: "Guides" },
            { href: "/prescripteurs", label: "Programme prescripteurs" },
        ],
    },
    {
        title: "Entreprise",
        links: [
            { href: "/a-propos", label: "À propos" },
            { href: "/contact", label: "Contact" },
            { href: "https://www.linkedin.com", label: "LinkedIn", external: true },
        ],
    },
    {
        title: "Légal",
        links: [
            { href: "/mentions-legales", label: "Mentions légales" },
            { href: "/cgu", label: "CGU" },
            { href: "/politique-confidentialite", label: "Confidentialité" },
        ],
    },
];

function FrenchFlag() {
    return (
        <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="rounded-sm overflow-hidden">
            <rect width="6.67" height="14" fill="#002395" />
            <rect x="6.67" width="6.67" height="14" fill="#FFFFFF" />
            <rect x="13.33" width="6.67" height="14" fill="#ED2939" />
        </svg>
    );
}

export function Footer() {
    const linkClass = "text-white/70 hover:text-white text-sm transition-colors";
    const certClass = "px-2.5 py-1 rounded-full bg-white/10 border border-white/10";

    return (
        <footer style={{ backgroundColor: "#0D4A4D" }} className="text-white">
            <div className="mx-auto pt-20 pb-10" style={{ maxWidth: "var(--max-w)", paddingLeft: "var(--gutter-x)", paddingRight: "var(--gutter-x)" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-8">

                    <div>
                        <MettryLogo size={28} tone="light" />
                        <p className="mt-5 text-white/70 max-w-xs leading-relaxed text-[15px]">
                            Le pilotage de votre patrimoine immobilier, enfin centralisé.
                        </p>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Mettry" className="inline-flex items-center justify-center w-10 h-10 mt-6 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                            </svg>
                        </a>
                        <div className="mt-8 inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 border border-white/10">
                            <FrenchFlag />
                            <span className="text-xs font-medium text-white/85">Données hébergées en France</span>
                        </div>
                    </div>

                    {COLUMNS.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-white text-[13px] uppercase tracking-[0.08em] font-semibold mb-5" style={{ fontFamily: "var(--font-display)" }}>
                                {col.title}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {col.links.map((link) => (
                                    <li key={link.href}>
                                        {link.external ? (
                                            <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{link.label}</a>
                                        ) : (
                                            <Link href={link.href} className={linkClass}>{link.label}</Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                <div className="mt-16 pt-6 border-t border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="text-xs text-white/60">
                        © {new Date().getFullYear()} Mettry SAS · 15 rue des halles, 75001 Paris ·{" "}
                        <a href="mailto:contact@mettry.io" className="hover:text-white/80">contact@mettry.io</a>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/60">
                        <span className={certClass}>SOC 2</span>
                        <span className={certClass}>RGPD</span>
                        <span className={certClass}>ISO 27001 en cours</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
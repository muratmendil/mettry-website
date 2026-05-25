import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { COMPARE_CATEGORIES, type CompareRow } from "@/lib/pricing";

export function ComparisonTable() {
    return (
        <section className="py-16 lg:py-24 bg-bg-off-white border-y border-border-default">
            <Container>
                <div className="max-w-3xl mb-12">
                    <Eyebrow>Comparer</Eyebrow>
                    <RevealOnScroll>
                        <h2 className="mt-6">Quelle différence entre les plans ?</h2>
                    </RevealOnScroll>
                </div>

                <div className="bg-white rounded-card border border-border-default overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border-default">
                                <th className="text-left px-5 py-4 w-[40%] text-xs uppercase tracking-wider font-semibold text-ink-tertiary">
                                    Fonctionnalité
                                </th>
                                <th className="text-center px-4 py-4 text-xs uppercase tracking-wider font-semibold text-ink-secondary">
                                    Essentiel
                                </th>
                                <th className="text-center px-4 py-4">
                                    <div
                                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-white px-3 py-1 rounded-full"
                                        style={{ background: "#0D4A4D" }}
                                    >
                                        Complet
                                    </div>
                                </th>
                                <th className="text-center px-4 py-4 text-xs uppercase tracking-wider font-semibold text-ink-secondary">
                                    Enterprise
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {COMPARE_CATEGORIES.map((cat) => (
                                <CategoryRows key={cat.title} title={cat.title} rows={cat.rows} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </section>
    );
}

function CategoryRows({ title, rows }: { title: string; rows: CompareRow[] }) {
    return (
        <>
            <tr className="bg-[var(--accent-xlight)] border-y border-border-default">
                <td
                    colSpan={4}
                    className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-[var(--accent-dark)]"
                >
                    {title}
                </td>
            </tr>
            {rows.map((row, i) => (
                <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-bg-off-white"}
                >
                    <td className="px-5 py-3 text-[14px] text-ink-primary">{row.label}</td>
                    <td className="text-center px-4 py-3">
                        <Cell value={row.essentiel} />
                    </td>
                    <td
                        className="text-center px-4 py-3"
                        style={{ background: i % 2 === 0 ? "rgba(5,137,133,0.04)" : "rgba(5,137,133,0.08)" }}
                    >
                        <Cell value={row.complet} highlight />
                    </td>
                    <td className="text-center px-4 py-3">
                        <Cell value={row.enterprise} />
                    </td>
                </tr>
            ))}
        </>
    );
}

function Cell({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
    if (typeof value === "string") {
        return (
            <span
                className="text-[13px] font-medium"
                style={{ color: highlight ? "var(--accent-dark)" : "var(--color-ink-primary)" }}
            >
                {value}
            </span>
        );
    }
    if (value) {
        return (
            <Check
                size={18}
                className="mx-auto"
                style={{ color: highlight ? "var(--accent)" : "var(--color-success)" }}
                strokeWidth={2.5}
            />
        );
    }
    return <Minus size={16} className="mx-auto text-ink-tertiary" />;
}
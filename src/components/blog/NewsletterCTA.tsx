"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function NewsletterCTA() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.includes("@")) return;
        setSubmitting(true);
        // TODO Phase 8 : POST /api/newsletter
        await new Promise((r) => setTimeout(r, 700));
        setSubmitting(false);
        setSubmitted(true);
    };

    return (
        <section className="py-16 lg:py-20">
            <Container>
                <div
                    className="relative overflow-hidden rounded-card p-10 lg:p-12 text-white"
                    style={{ background: "var(--color-teal-deeper)" }}
                >
                    <div
                        className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
                        style={{
                            background: "radial-gradient(circle, rgba(245,160,66,0.22), transparent 65%)",
                            filter: "blur(50px)",
                        }}
                        aria-hidden="true"
                    />
                    <div
                        className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full pointer-events-none"
                        style={{
                            background: "radial-gradient(circle, rgba(5,137,133,0.4), transparent 60%)",
                            filter: "blur(80px)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-white mb-4" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                                Une newsletter, deux fois par mois.
                            </h2>
                            <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-md">
                                Les meilleurs articles, les actus FM, les guides à télécharger. Pas de spam.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-card p-5">
                                <span className="w-10 h-10 rounded-full bg-success flex items-center justify-center shrink-0">
                                    <Check size={20} className="text-white" strokeWidth={3} />
                                </span>
                                <div>
                                    <div className="font-semibold">Merci !</div>
                                    <div className="text-sm text-white/75">Un email de confirmation arrive.</div>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="email"
                                        required
                                        placeholder="vous@organisation.fr"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 h-12 px-4 rounded-[var(--radius-btn)] bg-white text-ink-primary placeholder:text-ink-tertiary border-0 focus:outline-none focus:ring-2 focus:ring-orange"
                                    />
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[var(--radius-btn)] text-white font-semibold shrink-0 hover:-translate-y-px transition-transform disabled:opacity-60"
                                        style={{ background: "var(--color-orange)" }}
                                    >
                                        {submitting ? "..." : <>S&apos;abonner <ArrowRight size={16} /></>}
                                    </button>
                                </div>
                                <p className="text-xs text-white/55">
                                    En vous abonnant, vous acceptez de recevoir nos emails. Désinscription en 1 clic.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
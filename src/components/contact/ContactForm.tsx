"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const schema = z.object({
    name: z.string().min(2, "Indiquez votre nom"),
    email: z.string().email("Email invalide"),
    subject: z.enum(["commercial", "support", "presse", "partenariat", "autre"], { message: "Sélectionnez un sujet" }),
    message: z.string().min(20, "Votre message doit faire au moins 20 caractères"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
    const [sent, setSent] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onBlur",
    });

    const onSubmit = async (_data: FormData) => {
        // TODO Phase 8 : POST /api/contact
        await new Promise((r) => setTimeout(r, 900));
        setSent(true);
    };

    if (sent) {
        return (
            <div className="flex flex-col items-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center mb-5">
                    <Check size={32} className="text-white" strokeWidth={3} />
                </div>
                <h3 className="mb-3">Message envoyé.</h3>
                <p className="max-w-sm">
                    Nous vous répondons sous 24 heures ouvrées. Si c&apos;est urgent, écrivez directement à hello@mettry.io.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Votre nom" error={errors.name?.message}>
                    <input {...register("name")} type="text" placeholder="Marie Dupont" className={inputClass(!!errors.name)} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                    <input {...register("email")} type="email" placeholder="marie@org.fr" className={inputClass(!!errors.email)} />
                </Field>
            </div>

            <Field label="Sujet" error={errors.subject?.message}>
                <select {...register("subject")} defaultValue="" className={inputClass(!!errors.subject)}>
                    <option value="" disabled>Sélectionner…</option>
                    <option value="commercial">Question commerciale</option>
                    <option value="support">Support technique</option>
                    <option value="presse">Demande presse</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                </select>
            </Field>

            <Field label="Message" error={errors.message?.message}>
                <textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Décrivez votre besoin, votre contexte, vos questions…"
                    className={cn(inputClass(!!errors.message), "h-auto py-3 leading-relaxed resize-y")}
                />
            </Field>

            <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-ink-tertiary max-w-xs">
                    En soumettant, vous acceptez notre politique de confidentialité.
                </p>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi…" : <>Envoyer <Send size={16} /></>}
                </Button>
            </div>
        </form>
    );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-secondary uppercase tracking-wider">{label}</span>
            {children}
            {error && <span className="text-xs text-error font-medium">{error}</span>}
        </label>
    );
}

function inputClass(hasError: boolean) {
    return cn(
        "h-11 px-3.5 rounded-[var(--radius-btn)] bg-white border text-[15px]",
        "transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
        hasError
            ? "border-error focus:border-error"
            : "border-border-default hover:border-ink-tertiary focus:border-[var(--accent)]"
    );
}
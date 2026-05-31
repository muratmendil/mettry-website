"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { demoStep1Schema, type DemoFormValues, ROLES, PARC_SIZES } from "@/lib/demo-schema";

type Step1Values = DemoFormValues;

interface Step1FormProps {
    defaultValues?: Partial<Step1Values>;
    onSubmit: (values: Step1Values) => void;
}

export function Step1Form({ defaultValues, onSubmit }: Step1FormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<Step1Values>({
        resolver: zodResolver(demoStep1Schema),
        defaultValues: {
            name: defaultValues?.name ?? "",
            email: defaultValues?.email ?? "",
            organization: defaultValues?.organization ?? "",
            role: defaultValues?.role ?? ROLES[0],
            parcSize: defaultValues?.parcSize ?? PARC_SIZES[0],
        },
        mode: "onChange",
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-2xl mb-1.5">Parlez-nous de vous</h3>
            <p className="text-sm text-ink-tertiary mb-6">Pour adapter la démo à votre contexte.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 mb-5">
                <Field label="Nom complet" required error={errors.name?.message}>
                    <input
                        type="text"
                        placeholder="Camille Dupont"
                        className={inputCls(!!errors.name)}
                        {...register("name")}
                    />
                </Field>

                <Field label="Email professionnel" required error={errors.email?.message}>
                    <input
                        type="email"
                        placeholder="camille@ville.fr"
                        className={inputCls(!!errors.email)}
                        {...register("email")}
                    />
                </Field>

                <Field label="Organisation" required error={errors.organization?.message}>
                    <input
                        type="text"
                        placeholder="Ville de…"
                        className={inputCls(!!errors.organization)}
                        {...register("organization")}
                    />
                </Field>

                <Field label="Votre rôle">
                    <select className={inputCls(false)} {...register("role")}>
                        {ROLES.map((r) => (
                            <option key={r} value={r}>{r}</option>
                        ))}
                    </select>
                </Field>
            </div>

            <Field label="Taille du parc">
                <select className={inputCls(false)} {...register("parcSize")}>
                    {PARC_SIZES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </Field>

            <div className="flex justify-end mt-7">
                <button
                    type="submit"
                    disabled={!isValid}
                    className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[var(--radius-btn)] text-white text-sm font-semibold transition-all disabled:cursor-not-allowed"
                    style={{
                        background: isValid ? "var(--accent-dark)" : "rgba(25,115,120,0.35)",
                    }}
                >
                    Continuer
                    <ArrowRight size={16} />
                </button>
            </div>
        </form>
    );
}

function Field({
    label,
    required,
    error,
    children,
}: {
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="block text-sm font-semibold text-ink-primary mb-2">
                {label}
                {required && <span className="text-error ml-0.5">*</span>}
            </label>
            {children}
            {error && <div className="mt-1.5 text-xs text-error">{error}</div>}
        </div>
    );
}

function inputCls(hasError: boolean) {
    return `w-full h-12 px-4 rounded-[var(--radius-btn)] bg-white border text-[15px] text-ink-primary placeholder:text-ink-tertiary transition-colors outline-none focus:border-[var(--accent)] ${hasError ? "border-error" : "border-border-default"}`;
}
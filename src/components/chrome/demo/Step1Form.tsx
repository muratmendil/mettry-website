"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoStep1Schema, type DemoStep1, ROLES, PARC_SIZES } from "@/lib/demo-schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface Step1FormProps {
    defaultValues: Partial<DemoStep1>;
    onNext: (data: DemoStep1) => void;
}

export function Step1Form({ defaultValues, onNext }: Step1FormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DemoStep1>({
        resolver: zodResolver(demoStep1Schema),
        defaultValues,
        mode: "onBlur",
    });

    return (
        <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-5">
            <Field label="Nom complet" error={errors.name?.message}>
                <input
                    {...register("name")}
                    type="text"
                    placeholder="Marie Dupont"
                    className={inputClass(!!errors.name)}
                />
            </Field>

            <Field label="Email professionnel" error={errors.email?.message}>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="marie@mairie-villeneuve.fr"
                    className={inputClass(!!errors.email)}
                />
            </Field>

            <Field label="Organisation" error={errors.organization?.message}>
                <input
                    {...register("organization")}
                    type="text"
                    placeholder="Mairie de Villeneuve"
                    className={inputClass(!!errors.organization)}
                />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Votre rôle" error={errors.role?.message}>
                    <select {...register("role")} className={inputClass(!!errors.role)} defaultValue="">
                        <option value="" disabled>
                            Sélectionner…
                        </option>
                        {ROLES.map((r) => (
                            <option key={r} value={r}>
                                {r}
                            </option>
                        ))}
                    </select>
                </Field>

                <Field label="Taille du parc" error={errors.parcSize?.message}>
                    <select {...register("parcSize")} className={inputClass(!!errors.parcSize)} defaultValue="">
                        <option value="" disabled>
                            Sélectionner…
                        </option>
                        {PARC_SIZES.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </Field>
            </div>

            <div className="flex justify-end pt-2">
                <Button type="submit">Étape suivante</Button>
            </div>
        </form>
    );
}

// --- helpers locaux ---
function Field({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-secondary uppercase tracking-wider">
                {label}
            </span>
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
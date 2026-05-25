"use client";

import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { useDemoModal } from "./DemoModalProvider";
import { Step1Form } from "./demo/Step1Form";
import { Step2Calendar } from "./demo/Step2Calendar";
import { Step3Recap } from "./demo/Step3Recap";
import type { DemoStep1 } from "@/lib/demo-schema";

type Stage = 1 | 2 | 3 | "success";

export function DemoModal() {
    const { open, closeDemo } = useDemoModal();
    const [stage, setStage] = useState<Stage>(1);
    const [formData, setFormData] = useState<Partial<DemoStep1 & { date: string; time: string }>>({});
    const [submitting, setSubmitting] = useState(false);

    // Reset quand on referme
    useEffect(() => {
        if (!open) {
            const t = setTimeout(() => {
                setStage(1);
                setFormData({});
                setSubmitting(false);
            }, 250); // attend la fin de l'anim
            return () => clearTimeout(t);
        }
    }, [open]);

    const handleStep1 = (data: DemoStep1) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setStage(2);
    };

    const handleStep2 = (data: { date: string; time: string }) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setStage(3);
    };

    const handleSubmit = async () => {
        setSubmitting(true);
        // TODO Phase 8 : POST /api/demo
        await new Promise((r) => setTimeout(r, 900));
        setSubmitting(false);
        setStage("success");
    };

    const progressIndex = stage === "success" ? 3 : (stage as number) - 1;

    return (
        <Dialog.Root open={open} onOpenChange={(o) => !o && closeDemo()}>
            <Dialog.Portal>
                <Dialog.Overlay asChild>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                    />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                        className={cn(
                            "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
                            "w-[92vw] max-w-xl bg-white rounded-card overflow-hidden",
                            "shadow-[var(--shadow-xl-mettry)]",
                            "max-h-[92vh] flex flex-col"
                        )}
                    >
                        {/* Header + progress */}
                        <div className="px-6 pt-5 pb-4 border-b border-border-default">
                            <div className="flex items-center justify-between mb-4">
                                <Dialog.Title
                                    className="text-[20px] font-bold"
                                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.018em" }}
                                >
                                    {stage === "success" ? "Démo confirmée" : "Demander une démo"}
                                </Dialog.Title>
                                <Dialog.Close
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-btn hover:bg-bg-light text-ink-tertiary hover:text-ink-primary transition-colors"
                                    aria-label="Fermer"
                                >
                                    <X size={18} />
                                </Dialog.Close>
                            </div>

                            <Dialog.Description className="sr-only">
                                Formulaire de demande de démo en 3 étapes : vos informations, choix du créneau, et confirmation.
                            </Dialog.Description>

                            {/* Progress bar 3 segments */}
                            {stage !== "success" && (
                                <div className="flex items-center gap-1.5">
                                    {[0, 1, 2].map((i) => (
                                        <div
                                            key={i}
                                            className={cn(
                                                "h-1 flex-1 rounded-full transition-colors duration-300",
                                                i <= progressIndex ? "bg-[var(--accent)]" : "bg-border-default"
                                            )}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Body avec transition entre étapes */}
                        <div className="px-6 py-6 overflow-y-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={stage}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                                >
                                    {stage === 1 && (
                                        <Step1Form defaultValues={formData} onNext={handleStep1} />
                                    )}
                                    {stage === 2 && (
                                        <Step2Calendar
                                            initialDate={formData.date}
                                            initialTime={formData.time}
                                            onBack={() => setStage(1)}
                                            onNext={handleStep2}
                                        />
                                    )}
                                    {stage === 3 && formData.name && formData.date && (
                                        <Step3Recap
                                            data={formData as DemoStep1 & { date: string; time: string }}
                                            onBack={() => setStage(2)}
                                            onSubmit={handleSubmit}
                                            submitting={submitting}
                                        />
                                    )}
                                    {stage === "success" && (
                                        <SuccessView name={formData.name ?? ""} onClose={closeDemo} />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

function SuccessView({ name, onClose }: { name: string; onClose: () => void }) {
    return (
        <div className="flex flex-col items-center text-center py-4">
            <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center mb-5"
            >
                <Check size={32} className="text-white" strokeWidth={3} />
            </motion.div>
            <h3 className="mb-3">Merci {name.split(" ")[0]} !</h3>
            <p className="max-w-sm">
                Nous vous avons envoyé une confirmation par email avec le lien Google Meet.
                Notre équipe vous recontacte la veille pour confirmer.
            </p>
            <div className="mt-6">
                <button
                    onClick={onClose}
                    className="text-sm font-semibold text-[var(--accent-dark)] hover:text-[var(--accent)] transition-colors"
                >
                    Fermer
                </button>
            </div>
        </div>
    );
}
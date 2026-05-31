"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useDemoModal } from "./DemoModalProvider";
import { MettryLogo } from "@/components/ui/MettryLogo";
import { Step1Form } from "./demo/Step1Form";
import { Step2Calendar } from "./demo/Step2Calendar";
import { Step3Recap } from "./demo/Step3Recap";
import type { DemoFormValues } from "@/lib/demo-schema";

type Stage = 1 | 2 | 3 | "success";

interface DemoData extends DemoFormValues {
    date?: string;
    time?: string;
}

export function DemoModal() {
    const { open, closeDemo } = useDemoModal();
    const [stage, setStage] = useState<Stage>(1);
    const [data, setData] = useState<Partial<DemoData>>({});

    const handleClose = () => {
        closeDemo();
        setTimeout(() => {
            setStage(1);
            setData({});
        }, 200);
    };

    return (
        <Dialog.Root open={open} onOpenChange={(v) => !v && handleClose()}>
            <AnimatePresence>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        </Dialog.Overlay>
                        <Dialog.Content asChild>
                            <motion.div
                                className="fixed left-1/2 top-1/2 z-[90] w-[calc(100%-32px)] max-w-2xl -translate-x-1/2 -translate-y-1/2"
                                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                                transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                            >
                                <div className="bg-white rounded-card overflow-hidden" style={{ boxShadow: "var(--shadow-xl-mettry)" }}>
                                    {/* Header */}
                                    <div className="flex items-start justify-between px-7 pt-6 pb-5">
                                        <div className="flex items-center gap-3">
                                            <MettryLogo size={32} />
                                            <div>
                                                <Dialog.Title asChild>
                                                    <h3 className="text-lg leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.018em" }}>
                                                        Réserver une démo
                                                    </h3>
                                                </Dialog.Title>
                                                <Dialog.Description className="text-sm text-ink-tertiary mt-0.5">
                                                    30 min · en visio · sans engagement
                                                </Dialog.Description>
                                            </div>
                                        </div>
                                        <Dialog.Close
                                            className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white border border-border-default hover:bg-bg-off-white transition-colors"
                                            aria-label="Fermer"
                                        >
                                            <X size={18} />
                                        </Dialog.Close>
                                    </div>

                                    {/* Stepper */}
                                    {stage !== "success" && (
                                        <div className="px-7">
                                            <div className="grid grid-cols-3 gap-2">
                                                {[1, 2, 3].map((n) => {
                                                    const isActive = typeof stage === "number" && n <= stage;
                                                    return (
                                                        <div
                                                            key={n}
                                                            className="h-[3px] rounded-full transition-colors"
                                                            style={{ background: isActive ? "var(--accent-dark)" : "var(--color-border-default)" }}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Body */}
                                    <div className="px-7 pt-7 pb-7">
                                        <AnimatePresence mode="wait">
                                            {stage === 1 && (
                                                <motion.div key="s1" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}>
                                                    <Step1Form
                                                        defaultValues={data}
                                                        onSubmit={(values) => {
                                                            setData((prev) => ({ ...prev, ...values }));
                                                            setStage(2);
                                                        }}
                                                    />
                                                </motion.div>
                                            )}
                                            {stage === 2 && (
                                                <motion.div key="s2" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}>
                                                    <Step2Calendar
                                                        onBack={() => setStage(1)}
                                                        onNext={(slot) => {
                                                            setData((prev) => ({ ...prev, date: slot.date, time: slot.time }));
                                                            setStage(3);
                                                        }}
                                                    />
                                                </motion.div>
                                            )}
                                            {stage === 3 && (
                                                <motion.div key="s3" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}>
                                                    <Step3Recap
                                                        data={data as DemoData}
                                                        onBack={() => setStage(2)}
                                                        onConfirm={() => setStage("success")}
                                                    />
                                                </motion.div>
                                            )}
                                            {stage === "success" && (
                                                <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                                                    <div className="w-16 h-16 rounded-full bg-success/15 mx-auto mb-5 flex items-center justify-center">
                                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="mb-2">C&apos;est confirmé !</h3>
                                                    <p className="text-ink-secondary max-w-md mx-auto">
                                                        Vous recevez un email de confirmation dans quelques secondes avec le lien de la visio.
                                                    </p>
                                                    <button
                                                        type="button"
                                                        onClick={handleClose}
                                                        className="mt-7 inline-flex items-center justify-center h-12 px-6 rounded-[var(--radius-btn)] bg-[var(--accent-dark)] text-white text-sm font-semibold"
                                                    >
                                                        Fermer
                                                    </button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
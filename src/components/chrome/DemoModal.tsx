"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useDemoModal } from "./DemoModalProvider";
import { Button } from "@/components/ui/Button";

export function DemoModal() {
    const { open, closeDemo } = useDemoModal();

    return (
        <Dialog.Root open={open} onOpenChange={(o) => !o && closeDemo()}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-md bg-white rounded-card shadow-[var(--shadow-xl-mettry)] p-8">
                    <Dialog.Title className="font-display text-2xl font-bold">
                        Demander une démo
                    </Dialog.Title>
                    <Dialog.Description className="mt-3 text-ink-secondary">
                        Stub temporaire — sera remplacé au prochain message par la modale 3
                        étapes complète.
                    </Dialog.Description>
                    <div className="mt-6 flex gap-3 justify-end">
                        <Button variant="ghost" onClick={closeDemo}>
                            Fermer
                        </Button>
                    </div>
                    <Dialog.Close
                        className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-btn hover:bg-bg-light"
                        aria-label="Fermer"
                    >
                        <X size={18} />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
"use client";

import { Button } from "@/components/ui/Button";
import { useDemoModal } from "@/components/chrome/DemoModalProvider";

export function DemoButtonClient() {
    const { openDemo } = useDemoModal();
    return (
        <Button variant="on-dark" className="relative w-full" onClick={openDemo}>
            Réserver un créneau
        </Button>
    );
}
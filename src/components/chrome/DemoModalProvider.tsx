"use client";

import { createContext, useCallback, useContext, useState } from "react";

interface DemoModalContextValue {
    open: boolean;
    openDemo: () => void;
    closeDemo: () => void;
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    const openDemo = useCallback(() => setOpen(true), []);
    const closeDemo = useCallback(() => setOpen(false), []);

    return (
        <DemoModalContext.Provider value={{ open, openDemo, closeDemo }}>
            {children}
        </DemoModalContext.Provider>
    );
}

export function useDemoModal() {
    const ctx = useContext(DemoModalContext);
    if (!ctx) {
        throw new Error("useDemoModal must be used within DemoModalProvider");
    }
    return ctx;
}
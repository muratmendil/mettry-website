"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { MettryLogo } from "@/components/ui/MettryLogo";
import { useDemoModal } from "./DemoModalProvider";

const NAV_LINKS = [
    { href: "/fonctionnalites", label: "Fonctionnalités" },
    { href: "/solutions", label: "Solutions" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/blog", label: "Blog" },
    { href: "/a-propos", label: "À propos" },
];

export function Navbar() {
    const pathname = usePathname();
    const { openDemo } = useDemoModal();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Ferme le menu mobile au changement de route
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 inset-x-0 z-40 transition-[background,backdrop-filter,border-color] duration-200",
                    scrolled
                        ? "bg-white/85 backdrop-blur-[14px] backdrop-saturate-[160%] border-b border-border-default"
                        : "bg-transparent border-b border-transparent"
                )}
            >
                <div
                    className="mx-auto flex items-center justify-between h-[68px]"
                    style={{
                        maxWidth: "var(--max-w)",
                        paddingLeft: "var(--gutter-x)",
                        paddingRight: "var(--gutter-x)",
                    }}
                >
                    {/* Logo */}
                    <Link href="/" aria-label="Mettry — accueil" className="shrink-0">
                        <MettryLogo size={28} />
                    </Link>

                    {/* Liens desktop */}
                    <nav
                        className="hidden lg:flex items-center gap-1"
                        aria-label="Navigation principale"
                    >
                        {NAV_LINKS.map((link) => {
                            const isActive =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-[14px] font-medium transition-colors",
                                        isActive
                                            ? "text-ink-primary"
                                            : "text-ink-secondary hover:text-ink-primary"
                                    )}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span
                                            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full bg-orange"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTAs droite */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/contact">
                            <Button variant="ghost" size="sm">
                                Contact
                            </Button>
                        </Link>
                        <Button size="sm" onClick={openDemo}>
                            Demander une démo
                        </Button>
                    </div>

                    {/* Burger mobile */}
                    <button
                        type="button"
                        className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-btn text-ink-primary hover:bg-bg-light"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Ouvrir le menu"
                    >
                        <Menu size={22} />
                    </button>
                </div>
            </header>

            {/* Spacer pour compenser la nav fixed */}
            <div className="h-[68px]" aria-hidden="true" />

            {/* Menu mobile */}
            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
                    <Dialog.Content
                        className={cn(
                            "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl",
                            "flex flex-col",
                            "data-[state=open]:animate-in data-[state=closed]:animate-out",
                            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
                            "duration-300"
                        )}
                    >
                        <Dialog.Title className="sr-only">Menu</Dialog.Title>
                        <div className="flex items-center justify-between p-5 border-b border-border-default">
                            <MettryLogo size={26} />
                            <Dialog.Close
                                className="inline-flex items-center justify-center w-10 h-10 rounded-btn hover:bg-bg-light"
                                aria-label="Fermer le menu"
                            >
                                <X size={22} />
                            </Dialog.Close>
                        </div>
                        <nav className="flex-1 px-5 py-6 flex flex-col gap-1">
                            {NAV_LINKS.map((link) => {
                                const isActive =
                                    link.href === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "px-4 py-3 rounded-btn text-base font-medium",
                                            isActive
                                                ? "bg-[var(--accent-light)] text-[var(--accent-dark)]"
                                                : "text-ink-primary hover:bg-bg-light"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/contact"
                                className="px-4 py-3 rounded-btn text-base font-medium text-ink-primary hover:bg-bg-light"
                            >
                                Contact
                            </Link>
                        </nav>
                        <div className="p-5 border-t border-border-default">
                            <Button
                                className="w-full"
                                onClick={() => {
                                    setMobileOpen(false);
                                    openDemo();
                                }}
                            >
                                Demander une démo
                            </Button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FAQ } from "@/lib/pricing";

export function FAQAccordion() {
    return (
        <section className="py-16 lg:py-24">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <Eyebrow>FAQ</Eyebrow>
                        <RevealOnScroll>
                            <h2 className="mt-6">Les questions qu&apos;on nous pose le plus souvent.</h2>
                        </RevealOnScroll>
                    </div>

                    <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
                        {FAQ.map((item, i) => (
                            <Accordion.Item
                                key={i}
                                value={`item-${i}`}
                                className="bg-white rounded-card border border-border-default overflow-hidden data-[state=open]:border-[var(--accent)] transition-colors"
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-bg-off-white transition-colors">
                                        <span
                                            className="text-base lg:text-lg font-semibold text-ink-primary"
                                            style={{ fontFamily: "var(--font-display)" }}
                                        >
                                            {item.question}
                                        </span>
                                        <span className="shrink-0 w-8 h-8 rounded-full bg-bg-off-white flex items-center justify-center group-data-[state=open]:bg-[var(--accent)] group-data-[state=open]:rotate-45 transition-all duration-300">
                                            <Plus size={16} className="text-ink-primary group-data-[state=open]:text-white transition-colors" />
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                                    <div className="px-6 pb-5 text-[15px] leading-relaxed text-ink-secondary">
                                        {item.answer}
                                    </div>
                                </Accordion.Content>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </div>
            </Container>
        </section>
    );
}
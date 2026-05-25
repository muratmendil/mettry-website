import Script from "next/script";

interface Props {
    data: Record<string, unknown> | Array<Record<string, unknown>>;
    id?: string;
}

export function JsonLd({ data, id = "jsonld" }: Props) {
    return (
        <Script
            id={id}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
export const ORG_JSONLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mettry",
    url: "https://mettry.io",
    logo: "https://mettry.io/opengraph-image",
    email: "contact@mettry.io",
    telephone: "+33-4-72-00-00-00",
    address: {
        "@type": "PostalAddress",
        streetAddress: "15 rue des halles",
        postalCode: "75001",
        addressLocality: "Paris",
        addressCountry: "FR",
    },
    sameAs: ["https://www.linkedin.com/company/mettry"],
};

export const PRODUCT_JSONLD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mettry",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "49",
        highPrice: "129",
        offerCount: "3",
    },
    description:
        "Plateforme SaaS tout-en-un pour le pilotage de patrimoine immobilier : GMAO, suivi énergétique, Décret Tertiaire, ticketing, GED, contrats.",
};
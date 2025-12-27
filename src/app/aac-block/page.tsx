import { Metadata } from "next";
import AACBlockClient from "./AACBlockClient";
import JsonLd from "../components/common/JsonLd";

export const metadata: Metadata = {
    title: "Best AAC Blocks in Bhopal | High-Quality Construction Materials | Mohoncon Builds",
    description: "Looking for top-quality AAC blocks in Bhopal? Mohoncon Builds is the leading manufacturer of lightweight, eco-friendly, and durable AAC blocks for all your construction needs in Bhopal and MP.",
    keywords: ["AAC blocks Bhopal", "AAC blocks manufacturer Bhopal", "Bhopal AAC bricks", "Lightweight blocks Bhopal", "Best AAC blocks in MP", "Construction materials Bhopal"],
    openGraph: {
        title: "High-Quality AAC Blocks in Bhopal | Mohoncon Builds",
        description: "Sustainable and durable AAC blocks for your construction projects specifically tailored for the Bhopal market.",
    }
}

export default function AACBlock() {
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "AAC Blocks",
        "description": "Premium AAC blocks manufactured in Bhopal, offering superior strength and thermal insulation for local construction.",
        "brand": {
            "@type": "Brand",
            "name": "Mohoncon Builds"
        },
        "category": "Construction Materials",
        "material": "Autoclaved Aerated Concrete",
        "url": "https://www.mohanconbuilds.co.in/aac-block",
        "offers": {
            "@type": "AggregateOffer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "INR",
            "areaServed": {
                "@type": "City",
                "name": "Bhopal"
            }
        }
    };

    return (
        <>
            <JsonLd data={productSchema as Record<string, unknown>} />
            <AACBlockClient />
        </>
    );
}
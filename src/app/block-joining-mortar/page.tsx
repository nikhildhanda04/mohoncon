import { Metadata } from "next";
import BlockJoiningMortarClient from "./BlockJoiningMortarClient";
import JsonLd from "../components/common/JsonLd";

export const metadata: Metadata = {
    title: "AAC Block Joining Mortar in Bhopal | High-Strength Adhesive | Mohoncon Builds",
    description: "Best quality AAC block joining mortar in Bhopal. Our high-strength, self-curing adhesive mortar is perfect for construction projects in Bhopal and Madhya Pradesh.",
    keywords: ["Block joining mortar Bhopal", "AAC block adhesive Bhopal", "Construction mortar Bhopal", "Ready-mix mortar Bhopal", "Bhopal construction materials"],
    openGraph: {
        title: "Superior Block Joining Mortar in Bhopal | Mohoncon Builds",
        description: "Advanced construction mortar for AAC blocks, providing strong bonding and easy application for Bhopal-based builders.",
    }
}

export default function BlockJoiningMortar() {
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Block Joining Mortar",
        "description": "High-strength adhesive mortar for AAC blocks, optimized for the climate and construction styles in Bhopal.",
        "brand": {
            "@type": "Brand",
            "name": "Mohoncon Builds"
        },
        "category": "Construction Materials",
        "url": "https://www.mohanconbuilds.co.in/block-joining-mortar",
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
            <BlockJoiningMortarClient />
        </>
    );
}
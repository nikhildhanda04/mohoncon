import { Metadata } from "next";
import AACBlockClient from "./AACBlockClient";

export const metadata: Metadata = {
    title: "Best AAC Blocks in Bhopal | Lightweight & Durable | Mohoncon Builds",
    description: "Premium AAC blocks manufacturer in Bhopal, MP. Our AAC blocks are lightweight, eco-friendly, and provide superior thermal insulation. Ideal for modern construction in Madhya Pradesh.",
    keywords: ["AAC blocks Bhopal", "AAC bricks Bhopal", "Lightweight concrete blocks MP", "Eco-friendly construction materials", "Bhopal building materials"],
    openGraph: {
        title: "High-Quality AAC Blocks in Bhopal | Mohoncon Builds",
        description: "Sustainable and durable AAC blocks for your construction projects in Bhopal and Madhya Pradesh.",
    }
}

export default function AACBlock() {
    return <AACBlockClient />;
}
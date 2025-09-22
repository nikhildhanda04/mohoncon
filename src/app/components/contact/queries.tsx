'use client'

import Qna from "./qna";
import { motion } from 'framer-motion'

export default function Queries() {
    const queries = [
        {
            question: "What are AAC blocks, and why should I use them?",
            answer: `AAC (Autoclaved Aerated Concrete) blocks are lightweight, eco-friendly, and thermally insulated building blocks. They offer excellent strength, reduce construction time, and provide better energy efficiency compared to traditional bricks.`
        },
        {
            question: "What is block joining mortar, and how is it used?",
            answer: `Block joining mortar is a pre-mixed, ready-to-use adhesive designed to bond AAC blocks. It requires only the addition of water and is applied in a thin layer for faster, cleaner construction.`
        },
        {
            question: "Who will assit me?",
            answer: `We request you to kindly fill the enquiry form and our team will reach out to you `
        },
        {
            question: "Where are you located?",
            answer: `Our office is located at Mohancon Builds Pvt Ltd, Ralhan Farms, Opposite Indian Oil Petrol pump, Ichawar road, Sehore, Madhya Pradesh- 466001 Our production unit is located at Khasra No. 67 Village Udpura, Behind CRK Restaurant, Indore Bhopal Highway , Sonda, Madhya Pradesh - 466113`
        }
    ];

    return (
        <>
            <div className="bg-gray-100 w-full py-16">
                <motion.div 
                
                className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <motion.div 
                     initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                    className="text-center mb-16">
                        <h2 className="font-primary text-2xl md:text-5xl text-primary font-bold tracking-tight">
                            QUESTIONS? WE GOT YOU COVERED
                        </h2>
                    </motion.div>
                    
                    {/* FAQ Accordion */}
                    <motion.div
                     initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.1}}
                    className="max-w-4xl mx-auto">
                        {queries.map((query, index) => (
                            <Qna key={index} question={query.question} answer={query.answer} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
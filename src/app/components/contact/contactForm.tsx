'use client'

import { useState, type FormEvent } from "react"
import Image from "next/image"

import { motion } from 'framer-motion'
import { Instagram, Facebook } from 'lucide-react'

export default function ContactForm(){
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSending(true)
        setError("")

        const form = e.currentTarget
        const data = {
            formType: "quote",
            firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
            lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLInputElement).value,
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            const json = await res.json()
            if (json.success) {
                setSent(true)
                form.reset()
            } else {
                setError(json.message || "Something went wrong")
            }
        } catch {
            setError("Network error. Please try again.")
        } finally {
            setSending(false)
        }
    }

    return(
        <>
        <div className="bg-stone-200  w-full py-4 md:py-36 px-4 md:px-68">

            <motion.div 
             initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
            className="flex flex-row w-full justify-center">

                <div className="relative hidden md:block w-[25vw] z-99 ">
                    <Image 
                    src="/contect.webp"
                    alt=""
                    fill
                    className="object-cover rounded-l-lg"
                    />
                </div>
                <form className="flex rounded-lg font-primary text-white flex-col gap-10 bg-primary w-full p-9 md:p-8" onSubmit={handleSubmit}>

                    <div className="font-bold text-xl md:text-4xl">
                        Get In Touch
                    </div>

                    {sent ? (
                        <div className="text-white text-xl font-semibold py-8 text-center">
                            Thank you! We will get back to you soon.
                        </div>
                    ) : (
                        <>
                    <div className="flex flex-col md:flex-row gap-12 md:gap-28">

                        <div className="flex flex-col">

                            <div className="text-2xl">
                                First Name
                            </div>
                            <input 
                            name="firstName"
                            placeholder="Enter Your First Name"
                            required
                            className="text-base active:none active:outline:none border-b border-white py-2 text-left bg-transparent"
                            />

                        </div>
                        <div className="flex flex-col">

                            <div className="text-2xl">
                                Last Name
                            </div>
                            <input 
                            name="lastName"
                            placeholder="Enter Your Last Name"
                            required
                            className="text-base active:none active:outline:none border-b border-white py-2 text-left bg-transparent"
                            />

                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row gap-12 md:gap-28">

                        <div className="flex flex-col">

                            <div className="text-2xl">
                                Email
                            </div>
                            <input 
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            required
                            className="text-base active:none active:outline:none border-b border-white py-2 text-left bg-transparent"
                            />

                        </div>
                        <div className="flex flex-col">

                            <div className="text-2xl">
                                Phone
                            </div>
                            <input 
                            name="phone"
                            type="tel"
                            placeholder="Enter Your Phone"
                            required
                            className="text-base active:none active:outline:none border-b border-white py-2 text-left bg-transparent"
                            />

                        </div>

                    </div>

                        <div className="flex flex-col">

                            <div className="text-2xl">
                                Message
                            </div>
                            <input 
                            name="message"
                            placeholder="Your Message"
                            className="text-base active:none active:outline:none border-b border-white py-2 text-left bg-transparent"
                            />

                        </div>

                        <button
                        type="submit"
                        disabled={sending}
                        className="text-primary px-5 py-3 rounded-lg w-fit hover:bg-black hover:text-white transition-all duration-200 bg-white disabled:opacity-60">
                            {sending ? "Sending..." : "Get A Quote"}
                        </button>

                        {error && (
                            <div className="text-red-300 text-sm">{error}</div>
                        )}
                        </>
                    )}

                    <div className="flex flex-col items-end gap-1">

                    <div className="text-white">
                        Follow us on
                    </div>
                    <div className="flex flex-row gap-3">

                        <div className="bg-white p-1 rounded-full">
                            <Instagram color="#299191"/>
                        </div>
                        <div className="bg-white p-1 rounded-full">
                            <Facebook color="#299191"/>
                        </div>

                    </div>

                </div>


                </form>



            </motion.div>

        </div>
        </>
    )
}

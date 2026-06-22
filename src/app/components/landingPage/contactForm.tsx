'use client'

import { useState, type FormEvent } from "react"
import Image from "next/image"
import { motion } from 'framer-motion'

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
            formType: "enquiry",
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            mobile: (form.elements.namedItem("mobile") as HTMLInputElement).value,
            location: (form.elements.namedItem("location") as HTMLInputElement).value,
            quantity: (form.elements.namedItem("quantity") as HTMLInputElement).value,
            blocks: (form.elements.namedItem("blocks") as HTMLInputElement).value,
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
        <motion.div 
        initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
        className="flex flex-row mx-4 sm:mx-40 md:mx-44 lg:mx-72 mt-36 jusitfy-between rounded-xl bg-[#c1ccdb]">

          <div className="relative hidden md:block w-40 md:w-64 lg:w-88 mt-4 xl:w-104  flex-shrink-0">
                    <Image
                    src="/contactform.webp"
                    alt="fire"
                    className="object-cover group-hover:brightness-0 group-hover:invert"
                    fill
                    />
                </div>

            <div className="flex flex-col  mx-auto text-center px-8 md:px-20 py-12 ">

                <div className="font-primary text-2xl md:text-5xl font-bold text-gray-800 ">
                    We are just a click away!
                </div>
                <div className="font-primary text-sm md:text-xl font-medium text-gray-800">
                    Let&apos;s build something strong together 
                </div>

                {sent ? (
                    <div className="mt-12 text-green-700 font-primary text-xl font-semibold">
                        Thank you! We will get back to you soon.
                    </div>
                ) : (
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12" onSubmit={handleSubmit}> 

                        <input 
                        name="name"
                        placeholder="Name"
                        required
                        className="py-4 px-3 rounded-md text-primary font-primary  bg-white"
                        />
                        <input 
                        name="mobile"
                        type="tel"
                        placeholder="Mobile no"
                        required
                        className="py-4 px-3 rounded-md text-primary font-primary bg-white"
                        />
                        <input 
                        name="location"
                        placeholder="Location"
                        required
                        className="py-4 px-3 rounded-md text-primary font-primary bg-white"
                        />
                        <input 
                        name="quantity"
                        placeholder="Quantity"
                        required
                        className="py-4 px-3 rounded-md text-primary font-primary  bg-white"
                        />                    
                        <input 
                        name="blocks"
                        placeholder="Blocks"
                        required
                        className="py-4 px-3 rounded-md text-primary font-primary  bg-white"
                        />
                        <button
                        type="submit"
                        disabled={sending}
                        className="py-4 px-3 hover:bg-black rounded-md text-white font-primary  bg-primary disabled:opacity-60">
                            {sending ? "Sending..." : "Enquire Now"}
                        </button>

                        {error && (
                            <div className="md:col-span-3 text-red-600 text-sm font-primary">{error}</div>
                        )}

                    </form>
                )}

            </div>

        </motion.div>
        </>
    )
}

import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Facebook, } from 'lucide-react'
import Link from "next/link"

export default function Footer(){
    return(
        <>
        <div className="bg-primary px-8 md:px-76 text-center md:text-start flex flex-col pt-8">

            <div className="flex flex-col md:flex-row border-b border-white justify-between gap-26 py-8">

                <div className="flex flex-col gap-16">

                    <div className="relative mx-auto w-28 h-28">
                        <Image 
                        src="/footerlogo.webp"
                        alt=""
                        fill
                        className="object-cover"
                        />
                    </div>
                    <div className="text-white font-primary text-base md:text-xl">
                         Mohancon Builds founded in 2025 is one of the largest integrated AAC block manufacturers in India. 
                    </div>

                </div>

                <div className="flex flex-col items-center text-center gap-12">

                    <div className="font-primary font-bold text-white text-xl">
                        Quick Links
                    </div>
                    <div className="flex flex-col gap-4 font-primary text-white text-lg">
                        <Link
                        href="/"
                        className="hover:underline font-medium">Home</Link>
                        <Link
                        href="/about-us"
                        className="hover:underline font-medium">About Us</Link>
                        <Link
                        href="/aac-block"
                        className="hover:underline font-medium">AAC Blocks</Link>
                        <Link
                        href="/block-joining-mortar"
                        className="hover:underline font-medium">Mortar</Link>
                        <Link
                        href="/sustainability"
                        className="hover:underline font-medium">Sustainability</Link>
                        <Link
                        href="/contact"
                        className="hover:underline font-medium">Contact</Link>

                    </div>
                    
                </div>

                <div className="flex flex-col gap-12 items-center md:items-start text-center">

                    <div className="font-primary font-bold text-white text-xl">
                        Address
                    </div>
                    <div className="flex flex-col gap-4 font-primary text-white text-lg">

                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div>
                                <MapPin fill="white" color="#299191" size="30"/>
                            </div>
                            <div className="md:text-left text-center text-sm md:text-base ">
                                Mohancon Builds Pvt.Ltd. Ralhan Farms, Opp. Indian oil petrol pump, Ichawar road, Sehore (MP) 466001 
                            </div>
                        </div>

                                                <div className="flex flex-col md:flex-row items-center gap-6">
                            <div>
                                <Phone fill="white" color="#299191" size="30"/>
                            </div>
                            <div className="md:text-left text-center text-sm md:text-base  font-secondary font-light ">
                                Mobile: +91 9131275489 <br />
                                Mobile: +91 9243115489
                            </div>
                        </div>

                                                <div className="flex flex-col md:flex-row items-center gap-6">
                            <div>
                                <Mail fill="white" color="#299191" size="30"/>
                            </div>
                            <div className="md:text-left text-center text-sm md:text-base ">
                                sales@mohanconbuilds.co.in
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="py-12 flex flex-row justify-between">

                <div className="font-primary font-light text-white text-sm">
                    © 2025 Web Mantra Solutions
                </div>

                    <div className="flex flex-row gap-3">

                        <div className="bg-white md:p-1 p-3 rounded-full">
                            <Instagram color="#299191" size="20"/>
                        </div>
                        <div className="bg-white md:p-1 p-3 rounded-full">
                            <Facebook color="#299191"  size="20"/>
                        </div>

                    </div>


                <div className="font-primary font-light text-white text-sm">
                    © 2025 Mohoncon Builds
                </div>

            </div>

        </div>
        </>
    )
}
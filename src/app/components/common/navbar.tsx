import Image from "next/image"

export default function Navbar(){
    return(
        <>
        <div className="flex flex-row px-68 py-8 items-center justify-between">
            
            <div className="relative w-30 h-30">
                <Image 
                src="/logo.webp"
                alt="Mohoncon"
                fill
                className="object-cover"
                />
            </div>

            <div className="flex flex-row gap-16 items-center">

                <div className="font-primary text-xl hover:text-primary hover:underline transition-all duration-200">Home</div>
                <div className="font-primary text-xl hover:text-primary hover:underline transition-all duration-200">About Us</div>
                <div className="font-primary text-xl hover:text-primary hover:underline transition-all duration-200">Products</div>
                <div className="font-primary text-xl hover:text-primary hover:underline transition-all duration-200">Sustainability</div>
                <div className="font-primary text-xl hover:text-primary hover:underline transition-all duration-200">Contact</div>
                
                <div className="font-primary text-xl bg-primary text-white rounded-lg px-6 py-4 hover:bg-black tranition-all duration-250">
                    Download Brochure
                </div>

            </div>
        </div>
        </>
    )
}
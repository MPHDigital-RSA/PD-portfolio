import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";


function Footer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMesage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            alert("fill all the fields");
            return
        }

        // display the values
        console.log(name, email, message)

        // clear the inputs
        setName("");
        setEmail("");
        setMesage("");
    }

    return (
        <div className="container mx-auto px-4 mt-8 pb-8">
            <p className='px-2 py-1 bg-sky-500/8 w-fit rounded-sm uppercase text-[var(--color-black)] dark:text-white'>Get in touch</p>

            <div className="mt-8 flex flex-col md:flex-row pb-10 border-b border-[#0000005d] dark:border-[#ffffff28] gap-20 items-start">
                <form onSubmit={handleSubmit} className="flex flex-col items-start w-full md:max-w-[300px]  justify-center gap-2">
                    <input type="text" placeholder="Name" className="bg-[#00000012] p-4 rounded dark:bg-[#ffffff2f] dark:text-white w-full" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" className="bg-[#00000012] p-4 rounded dark:bg-[#ffffff2f] dark:text-white w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder="Message" className="bg-[#00000012] p-4 rounded w-full dark:bg-[#ffffff2f] dark:text-white" value={message} onChange={(e) => setMesage(e.target.value)}></textarea>
                    <button type="submit" className="px-4 py-2 mt-4 bg-black text-white rounded cursor-pointer dark:bg-white dark:text-[var(--color-black)]" >Submit</button>
                </form>

                <div className=' flex gap-5 flex-wrap'>

                    <a href="#" className='flex items-center gap-2 w-fit py-3 px-6 text-[#EFD956] border-l-2 bg-[#EFD9562f]'>
                        <FaTiktok className='text-xl ' />
                        Tiktok
                    </a>

                    <a href="#" className='flex items-center gap-2 w-fit py-3 px-6 text-[#6896f4] border-l-2 bg-[#6896f42f]'>
                        <FaLinkedinIn className='text-xl ' />
                        LikedIn
                    </a>

                    <a href="#" className='flex items-center gap-2 w-fit py-3 px-6 text-[#ff5733] border-l-2 bg-[#ff57332f]'>
                        <FaYoutube className='text-xl ' />
                        YouTube
                    </a>

                    <a href="#" className='flex items-center gap-2 w-fit py-3 px-6 text-[#59C4DC] border-l-2 bg-[#59c4dc2f]'>
                        <FaPhoneAlt className='text-xl ' />
                        Call me now
                    </a>
                </div>
            </div>

            <p className="pt-5 text-center text-[var(--color-black)] dark:text-white">&copy; Prince Dev RSA 2025</p>
        </div>
    )
}

export default Footer

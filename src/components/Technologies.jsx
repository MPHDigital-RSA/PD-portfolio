
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Technologies() {
    return (
        <div className='container mx-auto px-4 text-[var(--color-black)] dark:text-white'>
            <p className='px-2 py-1 bg-sky-500/8 w-fit rounded-sm uppercase'>Technologies I Use</p>

            <div className='mt-8 flex gap-5 flex-wrap pb-10 border-b border-[#0000005d] dark:border-[#ffffff28]'>
                <div className='flex items-center gap-2 w-fit py-3 px-6 text-[#ff5733] border-l-2 bg-[#ff57332f]'>
                    <FaHtml5 className='text-2xl ' />
                    HTML-5
                </div>
                <div className='flex items-center gap-2 w-fit py-3 px-6 text-[#2C68DF] border-l-2 bg-[#2C68DF2f]'>
                    <FaCss3Alt className='text-2xl ' />
                    CSS-3
                </div>

                <div className='flex items-center gap-2 w-fit py-3 px-6 text-[#EFD956] border-l-2 bg-[#EFD9562f]'>
                    <FaJs className='text-2xl ' />
                    JAVASCRIPT
                </div>

                <div className='flex items-center gap-2 w-fit py-3 px-6 text-[#59C4DC] border-l-2 bg-[#59c4dc2f]'>
                    <FaReact className='text-2xl ' />
                    REACT-19
                </div>

                <div className='flex items-center gap-2 w-fit py-3 px-6 text-[#838282]  border-l-2 bg-[#8382822f]'>
                    <FaGithub className='text-2xl ' />
                    GITHUB
                </div>
            </div>
        </div>
    )
}

export default Technologies

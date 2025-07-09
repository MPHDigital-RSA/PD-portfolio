
import { FaLongArrowAltRight } from 'react-icons/fa';

function Hero() {
    return (
        <div className='container mx-auto px-4 py-20 text-[var(--color-black)] dark:text-white'>
            <p className='px-2 py-1 bg-sky-500/8 w-fit rounded-sm uppercase'>Hey, I'm</p>
            <h1 className=' my-4 md:my-8 text-3xl md:text-6xl font-bold bg-linear-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] text-transparent bg-clip-text'>Prince Mxolisi Hlela</h1>
            <p>I'm a Web Developer based in South Africa, Durban and also IT student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects.</p>

            <button className='flex items-center space-x-4 mt-10 bg-black text-white px-8 py-2 rounded-md cursor-pointer dark:bg-white dark:text-black'>Say Hi <FaLongArrowAltRight className='ml-2' /></button>
        </div>
    )
}

export default Hero

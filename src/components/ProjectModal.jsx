import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function ProjectModal({ project, setIsProjectModal }) {
    return (
        <div className='max-w-[600px] w-full bg-[white] dark:bg-[var(--color-black)] space-y-4 p-5 rounded flex flex-col'>
            <button className="bg-[var(--color-black)] w-fit text-white p-3 rounded cursor-pointer dark:bg-white dark:text-[var(--color-black)] mx-auto" onClick={() => setIsProjectModal(false)}><AiOutlineClose /></button>
            <img src={project.image} alt={`${project.title} image`} />
            <div className="text-2xl flex space-x-4 items-center justify-center text-[var(--color-black)] dark:text-white">
                <a href={project.github} target="_blank" onClick={() => setIsProjectModal(false)}>
                    <FaGithub />
                </a>
                <a href={project.live} target="_blank" onClick={() => setIsProjectModal(false)}>
                    <AiOutlineLink />
                </a>
            </div>
        </div>
    )
}

export default ProjectModal
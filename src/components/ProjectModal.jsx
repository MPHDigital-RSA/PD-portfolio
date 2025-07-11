import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

function ProjectModal({ project, setIsProjectModal }) {
    return (
        <div className='max-w-[600px] w-full bg-[white] dark:bg-[var(--color-black)] space-y-4 p-5 rounded'>
            <button className="bg-[var(--color-black)] w-fit text-white px-5 py-2 rounded cursor-pointer dark:bg-white dark:text-[var(--color-black)]" onClick={() => setIsProjectModal(false)}>close</button>
            <img src={project.image} alt={`${project.title} image`} />
            <div className="text-2xl flex space-x-4 items-center justify-center">
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
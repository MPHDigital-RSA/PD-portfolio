import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

function SingleProject({ project }) {
    return (
        <div className="w-full ">
            <img src={project.image} alt={`${project.title} image`} className="w-full object-cover" />
            <div className="flex items-center justify-between mt-6 mb-4 text-[var(--color-black)] dark:text-white">
                <p className="text-2xl">{project.title}</p>
                <div className="text-2xl flex space-x-4 items-center">
                    <a href={project.github} target="_blank">
                        <FaGithub />
                    </a>
                    <a href="#">
                        <AiOutlineLink />
                    </a>
                </div>
            </div>
            <p className="text-[var(--color-black)] dark:text-white">{project.description}</p>
            <div className="flex text-blue-400 space-x-3 mt-4 flex-wrap">
                {project.techStack.map((stack, index) => (
                    <p key={index}>{`${stack}`}</p>
                ))}
            </div>
        </div>
    )
}

export default SingleProject

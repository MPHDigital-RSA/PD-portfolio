import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

function SingleProject({ project }) {
    const [isProjectModal, setIsProjectModal] = useState(false);
    return (
        <>
            <div className="w-full ">
                <img src={project.image} alt={`${project.title} image`} className="w-full object-cover cursor-pointer" onClick={() => setIsProjectModal(true)} />
                <div className="flex items-center justify-between mt-6 mb-4 text-[var(--color-black)] dark:text-white">
                    <p className="text-2xl">{project.title}</p>
                    <div className="text-2xl flex space-x-4 items-center">
                        <a href={project.github} target="_blank">
                            <FaGithub />
                        </a>
                        <a href={project.live} target="_blank">
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

            {
                isProjectModal &&
                <div className="fixed h-screen w-screen bg-[#000000bc] top-0 left-0 dark:bg-[#ffffffd7] grid place-content-center px-10">
                    <ProjectModal project={project} setIsProjectModal={setIsProjectModal} />
                </div>
            }
        </>

    )
}

export default SingleProject


import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import SingleProject from './SingleProject';

const projects = [
    {
        title: "Intense Proxy",
        live: "#",
        github: "https://github.com/",
        image: project1,
        description: "Proxy provider website including authentication, dashboard and dynamic features",
        techStack: [
            "React",
            "Tailwind",
            "Supabase"
        ]
    },
    {
        title: "$AAPE Coin",
        live: "#",
        github: "https://github.com/",
        image: project2,
        description: "Site for a BSC based coin called $AAPE",
        techStack: [
            "Vue",
            "Next",
            "Netlify"
        ]
    },
    {
        title: "MovieDB",
        live: "#",
        github: "https://github.com/",
        image: project4,
        description: "TV application, displays different categories of movies/shows (popular, in theaters, trending etc) alongside a search option using TheMovieDB API for the data",
        techStack: [
            "Vue",
            "Next",
            "The MovieDB API",

        ]
    },
    {
        title: "Blockchain Explorer",
        live: "#",
        github: "https://github.com/",
        image: project3,
        description: "Sidechain explorer open source project (block explorer) for transactions.",
        techStack: [
            "React",
            "Tailwind",
            "Context",
            "Supabase",
        ]
    },
]

function Projects() {
    return (
        <div className='container mx-auto px-4 pt-10'>
            <div className='border-b border-[#0000005d] dark:border-[#ffffff28] pb-10'>
                <p className='px-2 py-1 bg-sky-500/8 w-fit rounded-sm uppercase dark:text-white'>featured projects</p>

                <div className='mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
                    {projects.map((project, index) => (
                        <SingleProject project={project} key={index} />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Projects


import { Projects } from "@/projection/portfolio"
import projects from "../../data/data.json"
import Image from "next/image";
import Link from "next/link";
import { Title } from "../Title";
import { div } from "framer-motion/client";

export default function Project() {

    const portfolioData = projects as { projects: Projects[] };

    return (
        <section id="projects" className="h-screen flex flex-col items-center  justify-center ">

            <Title title="Project" />

            {projects.projects.map((project: Projects, index: number) => (
                <div key={index} className="mb-10">
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-4xl font-bold mb-2">{project.name}</h2>
                            <p className="text-lg text-gray-400 mb">{project.description}</p>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <Link href={project.link} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                                    GitHub
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-lg">
                            <Image 
                            src={project.image} 
                            alt={project.name}
                            width={600}
                            height={400}
                            className="rounded-lg shadow-xl"/>
                        </div>
                    </div>
                </div>

            ))}

        </section>
    )
}
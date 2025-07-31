
import { Projects } from "@/projection/portfolio"
import projects from "../../data/data.json"
import Image from "next/image";
import Link from "next/link";
import { Title } from "../Title";

export default function Project() {

    const portfolioData = projects as { projects: Projects[] };

    return (
        <section id="projects" className="h-screen flex flex-col items-center  justify-center ">
            
            <Title title="Project"/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project: Projects) => (
                    <div
                        key={project.name}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="relative h-48 w-full">
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                {project.name}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
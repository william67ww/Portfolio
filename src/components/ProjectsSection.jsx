import { title } from "framer-motion/client"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Unity Pokemon Game",
        description: "A beautiful Pokemon Game using C# & Unity Technologies",
        image: "/projects/pokemon.avif",
        tags: ["C#", "Unity", "Game Development"],
        demoUrl: "#",
        githubUrl: "https://github.com/william67ww/PokemonUnity ",
    },
    {
        id: 2,
        title: "Corewar Game",
        description: "A beautiful Corewar Game using Vm & C programming",
        image: "/projects/corewar.jpg",
        tags: ["C", "Algo  ", "Assembly", "Parsing"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "E-commerce Landing Page",
        description: "A beautiful landing page app using react and tailwind",
        image: "/projects/e-commerce.webp",
        tags: ["React", "Tailwind CSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Featured<span className="text-primary"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} /></a>
                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a
                    href="https://github.com/william67ww"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full shadow-lg inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                    Check My Github
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    </section>
}
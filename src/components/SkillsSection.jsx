import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 100, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "React", level: 60, category: "Frontend" },
    { name: "Next.js", level: 65, category: "Frontend" },
    { name: "Tailwind", level: 70, category: "Frontend" },
    { name: "Vue.js", level: 50, category: "Frontend" },

    // Backend
    { name: "C/C++", level: 90, category: "Backend" },
    { name: "C#", level: 75, category: "Backend" },
    { name: "Python", level: 70, category: "Backend" },
    { name: "Mongo DB", level: 35, category: "Backend" },
    { name: "Postgres", level: 40, category: "Backend" },

    // Tools
    { name: "Git/GitHub", level: 85, category: "Tools" },
    { name: "Docker", level: 40, category: "Tools" },
    { name: "VSCode", level: 90, category: "Tools" },
    { name: "Figma", level: 30, category: "Tools" },

    // Design

    // Database
];

const categories = ["all", "Frontend", "Backend", "Tools"]

export const SkillsSection = () => {
    const [activateCategory, setActiveGategory] = useState("all")
    const filteredSkills = skills.filter((skills) => activateCategory ===  "all" || skills.category === activateCategory  )

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key} onClick={() => setActiveGategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activateCategory ===category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skills, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skills.name}
                            </h3>
                        </div>
                        <div className="w-full bg:-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{ width: skills.level + "%" }} />
                        </div>
                        <div className="text-right mt-1 ">
                            <span className="text-sm text-muted-foreground">{skills.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}
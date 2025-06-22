import { motion } from "framer-motion";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl  font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                    <p className="text-muted-foreground">
                        I'm William Wagner, a passionate web developer with a focus on creating
                        modern, user-friendly web applications. With a background in computer science and
                        a love for technology, I specialize in front-end development using React and Next.js.
                        My goal is to build intuitive interfaces that enhance user experiences and drive engagement.
                    </p>
                    <p className="text-muted-foreground">
                        I believe in the power of collaboration and continuous learning. I enjoy working with teams to
                        bring innovative ideas to life, and I'm always eager to explore new technologies and frameworks.
                        Whether it's building responsive designs or optimizing performance, I'm dedicated to delivering
                        high-quality code and exceptional results.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
                        <motion.a
                            href="#contact"
                            className="relative px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full shadow-lg inline-block"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                        <motion.a
                            href="../../public/CV_wagner_william.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover::bg-primary/10 transition-colors duration-300 "
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download CV
                        </motion.a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Front End Development
                                </h4>
                                <p className="text-muted-foreground">
                                    I specialize in creating responsive and interactive user interfaces using modern web technologies like React, Next.js, and Tailwind CSS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    UI/UX Desing 
                                </h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive and engaging user experiences is my passion. I focus on usability and aesthetics to create interfaces that users love.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Project Management
                                </h4>
                                <p className="text-muted-foreground">
                                    I have experience in managing projects from conception to deployment, ensuring timely delivery and high-quality standards through effective communication and collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

import { ArrowDown } from "lucide-react";
import { Sparkle } from "./Sparkle";
import { motion } from "framer-motion";

const AnimatedLetters = ({ text, delayStart = 0 }) => (
    <>
        {text.split("").map((char, i) => (
            <span
                key={i}
                className="letter-fade-in relative"
                style={{ animationDelay: `${delayStart + i * 0.05}s` }}
            >
                {char === " " ? "\u00A0" : char}
                <Sparkle delay={delayStart + i * 0.05} />
            </span>
        ))}
    </>
);

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 relative">
                    <h1 className="text-2xl md:text-6xl font-bold tracking-tight relative">
                        <span className="relative">
                            <AnimatedLetters text="Hi, I'm" delayStart={0} /> <Sparkle />
                        </span>
                        <span className="text-primary relative ml-2">
                            <AnimatedLetters text="William" delayStart={0.5} /> <Sparkle />
                        </span>
                        <span className="text-gradient ml-2 relative">
                            <AnimatedLetters text="Wagner" delayStart={1} /> <Sparkle />
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
                        I create stellar web experiences with a modern technolgies.
                        Specializing in front-end development, I build interfaces that are
                        both beautiful and functional. Let's bring your ideas to life!
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.7, ease: "easeOut" }}
                        className="pt-4"
                    >
                        <motion.a
                            href="#projects"
                            className="relative px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full shadow-lg inline-block text-center button-glow"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatedLetters text="View my work" delayStart={1.5} />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
                <span className="text-sm text-muted-foreground mb-2 ">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section> 
    );
};

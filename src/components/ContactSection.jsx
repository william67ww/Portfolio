import { Instagram, Linkedin, Mail, MapPin, Phone, SendIcon } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { desc, title } from "framer-motion/client"
import { useState } from "react"

export const ContactSection = () => {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I'll get back to you as soon as possible.",
            })
            setIsSubmitting(false)
        }, 1500);
    }

    return <section className="py-24 px-4 relative bg-secondary/30" id ="contact">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
                Have a project in mind or want to collaborate ? Feel free to reach out! I'm always open to discussing new ideas, projects, or opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">
                                    Email
                                </h4>
                                <a href="mailto:william.wagner@epitech.eu" className="text-muted-foreground hover:text-primary transition-colors">
                                    william.wagner@epitech.eu
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">
                                    Phone
                                </h4>
                                <a href="tel:++33638110779" className="text-muted-foreground hover:text-primary transition-colors">
                                    ++33 6 38 11 07 79
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">
                                    Location
                                </h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Strasbourg - 67000, France
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 ">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="www.linkedin.com/in/william-wagner-87ab3722b" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/william_w67_/profilcard" target="_blank">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className=" block text-sm font-medium mb-2">
                                Your Name
                            </label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="John White..." />
                        </div>
                        <div>
                            <label htmlFor="email" className=" block text-sm font-medium mb-2">
                                Your Email
                            </label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="john@gmail.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className=" block text-sm font-medium mb-2">
                                Your Message
                            </label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hey, I really like your work! Are you available to talk about a web project?" />
                        </div>
                        <button className={cn("cosmic-button w-full flex items-center justify-center gap-2", "")} disabled={isSubmitting} type="submit">
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <SendIcon size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}
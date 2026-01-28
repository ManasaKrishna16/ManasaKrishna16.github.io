import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';
import { ExternalLink, ArrowRight, X } from 'lucide-react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import EditableText from './admin/EditableText';
import { AdminAddButton, AdminDeleteButton } from './admin/AdminControls';
import { Project } from '@/data/portfolio';

const ProjectsSection = () => {
    const { data, addItem, removeItem } = usePortfolio();
    const { projects } = data;
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleAddProject = () => {
        const newProject: Project = {
            id: Date.now(),
            title: 'New Project',
            category: 'Web App',
            year: '2025',
            thumbnail: 'linear-gradient(135deg, #e0e0e0 0%, #b0b0b0 100%)',
            description: 'Project description...',
            problem: 'Problem statement...',
            research: 'Research done...',
            solution: 'Solution implemented...',
            outcome: 'Outcome achieved...',
            tools: ['React', 'TypeScript']
        };
        addItem('projects', newProject);
    };

    return (
        <section id="projects" className="section-padding bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <span className="text-primary font-medium uppercase tracking-widest text-sm">
                            Selected Work
                        </span>
                    </ScrollReveal>

                    <h2 className="heading-lg mt-4">
                        <AnimatedText text="Projects that" delay={0.2} />
                        <br />
                        <span className="heading-lg mt-4">
                            <AnimatedText text="speak for themselves" delay={0.4} />
                        </span>
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 0.1}>
                            <motion.div
                                layoutId={`project-${project.id}`}
                                onClick={() => setSelectedProject(project)}
                                whileHover={{ y: -10 }}
                                className="group cursor-pointer relative"
                                data-cursor="View"
                            >
                                <div className="absolute top-2 right-2 z-20">
                                    <AdminDeleteButton onDelete={() => removeItem('projects', index)} />
                                </div>

                                {/* Thumbnail */}
                                <div
                                    className="aspect-[16/10] rounded-2xl mb-4 overflow-hidden relative"
                                    style={{ background: project.thumbnail }}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                                    {/* Project number */}
                                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-medium">
                                        0{index + 1}
                                    </div>

                                    {/* View button */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileHover={{ opacity: 1, scale: 1 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ArrowRight className="text-white" size={24} />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Info */}
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-sm text-muted-foreground">
                                                <EditableText value={project.category} section={`projects.${index}`} field="category" />
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                                            <span className="text-sm text-muted-foreground">
                                                <EditableText value={project.year} section={`projects.${index}`} field="year" />
                                            </span>
                                        </div>
                                        <h3 className="heading-md group-hover:text-primary transition-colors">
                                            <EditableText value={project.title} section={`projects.${index}`} field="title" />
                                        </h3>
                                    </div>
                                    <motion.div
                                        initial={{ rotate: -45 }}
                                        whileHover={{ rotate: 0 }}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <ExternalLink size={20} className="text-primary" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                    <div className="col-span-full flex justify-center">
                        <AdminAddButton onAdd={handleAddProject} addLabel="Add Project" />
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-background/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
                    >
                        <motion.div
                            layoutId={`project-${selectedProject.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            {/* Header */}
                            <div
                                className="aspect-[21/9] rounded-t-3xl relative"
                                style={{ background: selectedProject.thumbnail }}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm text-primary font-medium">{selectedProject.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">{selectedProject.year}</span>
                                </div>

                                <h2 className="heading-lg mb-4">{selectedProject.title}</h2>
                                <p className="body-lg mb-8">{selectedProject.description}</p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="font-display font-semibold mb-2 text-primary">Problem</h4>
                                        <p className="text-muted-foreground">{selectedProject.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-display font-semibold mb-2 text-primary">Research</h4>
                                        <p className="text-muted-foreground">{selectedProject.research}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-display font-semibold mb-2 text-primary">Solution</h4>
                                        <p className="text-muted-foreground">{selectedProject.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-display font-semibold mb-2 text-primary">Outcome</h4>
                                        <p className="text-muted-foreground">{selectedProject.outcome}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-sm text-muted-foreground mr-2">Tools:</span>
                                    {selectedProject.tools.map((tool) => (
                                        <span key={tool} className="px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsSection;

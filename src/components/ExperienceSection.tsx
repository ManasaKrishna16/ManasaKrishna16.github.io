import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

import { usePortfolio } from '@/contexts/PortfolioContext';
import EditableText from './admin/EditableText';
import { AdminDeleteButton, AdminAddButton } from './admin/AdminControls';
import { Experience } from '@/data/portfolio';

const ExperienceSection = () => {
    const { data, addItem, removeItem } = usePortfolio();
    const { experience } = data;

    const handleAddExperience = () => {
        const newExp: Experience = {
            company: 'New Company',
            role: 'Role',
            period: '2025 - Present',
            location: 'Location',
            description: 'Description...',
            responsibilities: ['Responsibility 1'],
            color: 'from-blue-500 to-cyan-600'
        };
        addItem('experience', newExp);
    };

    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <span className="text-primary font-medium uppercase tracking-widest text-sm">
                            Experience
                        </span>
                    </ScrollReveal>

                    <h2 className="heading-lg mt-4">
                        <AnimatedText text="Where I've" delay={0.2} />
                        <br />
                        <span className="text-gradient">
                            <AnimatedText text="made an impact" delay={0.4} />
                        </span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {experience.map((exp, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.15}
                            direction={index % 2 === 0 ? 'left' : 'right'}
                            viewportMargin="-40px"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`relative mb-6 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'} md:w-1/2 ${index > 0 ? 'md:-mt-32' : ''}`}
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute top-0 w-4 h-4 rounded-full bg-primary shadow-glow"
                                    style={{
                                        [index % 2 === 0 ? 'right' : 'left']: '-0.5rem',
                                    }}
                                />

                                {/* Card */}
                                <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow relative group">
                                    <div className="absolute top-2 right-2 z-50">
                                        <AdminDeleteButton onDelete={() => removeItem('experience', index)} />
                                    </div>

                                    {/* Header */}
                                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                            <Briefcase size={20} />
                                        </div>
                                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                                            <h3 className="font-display font-semibold text-xl">
                                                <EditableText value={exp.company} section={`experience.${index}`} field="company" />
                                            </h3>
                                            <p className="text-primary font-medium">
                                                <EditableText value={exp.role} section={`experience.${index}`} field="role" />
                                            </p>
                                        </div>
                                    </div>

                                    {/* Meta */}
                                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <EditableText value={exp.period} section={`experience.${index}`} field="period" />
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <EditableText value={exp.location} section={`experience.${index}`} field="location" />
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-4">
                                        <EditableText value={exp.description} section={`experience.${index}`} field="description" />
                                    </p>

                                    {/* Responsibilities */}
                                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                        {exp.responsibilities.map((resp, respIndex) => (
                                            <motion.li
                                                key={respIndex}
                                                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + respIndex * 0.1 }}
                                                className={`flex items-start gap-2 text-sm ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                <span><EditableText value={resp} section={`experience.${index}.responsibilities`} field={`${respIndex}`} /></span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                    <div className="flex justify-center mt-12 pb-12 relative z-20">
                        <AdminAddButton onAdd={handleAddExperience} addLabel="Add Experience" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

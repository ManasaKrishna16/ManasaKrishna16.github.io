import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { getIcon } from '@/lib/icons';
import EditableText from './admin/EditableText';
import { AdminAddButton, AdminDeleteButton } from './admin/AdminControls';

const SkillsSection = () => {
  const { data, addItem, removeItem, updateItemInArray } = usePortfolio();
  const { skills } = data;

  return (
    <section id="skills" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Skills & Expertise
            </span>
          </ScrollReveal>

          <h2 className="heading-lg mt-4">
            <AnimatedText text="Crafting with" delay={0.2} />
            <br />
            <span className="text-gradient">
              <AnimatedText text="precision & purpose" delay={0.4} />
            </span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.categories.map((category, catIndex) => (
            <ScrollReveal key={catIndex} delay={catIndex * 0.2}>
              <div className="p-8 rounded-3xl glass-card h-full relative group">
                <div className="absolute top-2 right-2 z-50">
                  <AdminDeleteButton onDelete={() => removeItem('skills.categories', catIndex)} />
                </div>
                <h3 className="heading-md mb-8">
                  <EditableText value={category.category} section={`skills.categories.${catIndex}`} field="category" />
                </h3>

                <div className="space-y-8">
                  {category.items.map((skill, index) => {
                    const Icon = getIcon(skill.icon);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon size={20} className="text-primary" />
                            </div>
                            <span className="font-medium">
                              <EditableText value={skill.name} section={`skills.categories.${catIndex}.items.${index}`} field="name" />
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>

                        {/* Custom skill visualization - orbital circles */}
                        <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full"
                          />
                          <motion.div
                            initial={{ left: 0, opacity: 0 }}
                            whileInView={{ left: `${skill.level - 2}%`, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-glow"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tools Marquee */}
        <ScrollReveal>
          <div className="relative overflow-hidden py-8">
            {/* Gradient overlays removed as requested */}

            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...skills.toolsList, ...skills.toolsList].map((tool, index) => (
                <div
                  key={`${tool}-${index}`}
                  className="px-6 py-3 rounded-full border border-border bg-background/50 font-medium text-sm"
                >
                  {tool}
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Additional skills visualization */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'User Research', icon: '🔍' },
            { label: 'Wireframing', icon: '📐' },
            { label: 'Usability Testing', icon: '🧪' },
            { label: 'A/B Testing', icon: '📊' },
            { label: 'Information Architecture', icon: '🏗️' },
            { label: 'Accessibility', icon: '♿' },
            { label: 'Responsive Design', icon: '📱' },
            { label: 'Design Tokens', icon: '🎨' },
          ].map((skill, index) => (
            <ScrollReveal key={skill.label} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-2xl glass-card text-center group cursor-default"
              >
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium">{skill.label}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

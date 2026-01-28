import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { getIcon } from '@/lib/icons';
import EditableText from './admin/EditableText';
import { AdminAddButton, AdminDeleteButton } from './admin/AdminControls';

const EducationSection = () => {
  const { data, addItem, removeItem } = usePortfolio();
  const { education, achievements, certifications } = data;

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <ScrollReveal>
              <span className="text-primary font-medium uppercase tracking-widest text-sm">
                Education
              </span>
            </ScrollReveal>

            <h2 className="heading-lg mt-4 mb-12">
              <AnimatedText text="Academic" delay={0.2} />
              <br />
              <span className="text-gradient">
                <AnimatedText text="foundation" delay={0.4} />
              </span>
            </h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors group"
                  >
                    <div className="absolute top-0 right-0 z-50">
                      <AdminDeleteButton onDelete={() => removeItem('education', index)} />
                    </div>
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary shadow-glow" />

                    <span className="text-sm text-muted-foreground">
                      <EditableText value={edu.period} section={`education.${index}`} field="period" />
                    </span>
                    <h3 className="font-display font-semibold text-xl mt-1">
                      <EditableText value={edu.degree} section={`education.${index}`} field="degree" />
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      <EditableText value={edu.institution} section={`education.${index}`} field="institution" />
                    </p>
                    <p className="text-muted-foreground mt-3">
                      <EditableText value={edu.description} section={`education.${index}`} field="description" />
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          <EditableText value={course} section={`education.${index}.coursework`} field={`${i}`} />
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
              <div className="mt-4">
                <AdminAddButton onAdd={() => { }} addLabel="Add Education" />
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <ScrollReveal>
              <span className="text-primary font-medium uppercase tracking-widest text-sm">
                Achievements
              </span>
            </ScrollReveal>

            <h2 className="heading-lg mt-4 mb-12">
              <AnimatedText text="Awards & Publications " delay={0.2} />
              <br />
              <span className="text-gradient">
                <AnimatedText text="recognition" delay={0.4} />
              </span>
            </h2>

            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = getIcon(achievement.icon);
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-card rounded-2xl p-6 flex items-center gap-4 group relative"
                    >
                      <div className="absolute top-2 right-2 z-50">
                        <AdminDeleteButton onDelete={() => removeItem('achievements', index)} />
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground shadow-lg">
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display font-semibold">
                          <EditableText value={achievement.title} section={`achievements.${index}`} field="title" />
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          <EditableText value={achievement.category} section={`achievements.${index}`} field="category" />
                        </p>
                      </div>
                      <span className="text-sm font-medium text-primary">
                        <EditableText value={achievement.year} section={`achievements.${index}`} field="year" />
                      </span>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
              <div className="mt-4">
                <AdminAddButton onAdd={() => { }} addLabel="Add Achievement" />
              </div>
            </div>

            {/* Certifications */}
            <ScrollReveal delay={0.4}>
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 relative group">
                <h4 className="font-display font-semibold mb-4">Certifications</h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span><EditableText value={cert} section="certifications" field={`${index}`} /></span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

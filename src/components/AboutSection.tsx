import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';
import { usePortfolio } from '@/contexts/PortfolioContext';
import EditableText from './admin/EditableText';

import { TechIconCode, TechIconChip } from './TechIcons';

const AboutSection = () => {
  const { data } = usePortfolio();
  const { about } = data;
  const { stats } = about;

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image / Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main image placeholder with gradient */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 glass-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary/60 mx-auto mb-6 flex items-center justify-center text-6xl font-display font-bold text-primary-foreground">
                      {about.initials}
                    </div>
                    <p className="text-muted-foreground">{about.title}</p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute top-8 right-8 w-20 h-20 rounded-2xl bg-surface-elevated shadow-lg flex items-center justify-center p-4 glass-card"
                >
                  <TechIconCode />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="absolute bottom-8 left-8 w-16 h-16 rounded-xl bg-surface-elevated shadow-lg flex items-center justify-center p-3 glass-card"
                >
                  <TechIconChip />
                </motion.div>
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.5 }}
                className="absolute -bottom-6 -right-6 md:right-8 w-32 h-32 rounded-full bg-primary flex flex-col items-center justify-center text-primary-foreground shadow-glow"
              >
                <span className="text-3xl font-display font-bold">{about.experienceBadge.number}</span>
                <span className="text-xs uppercase tracking-wider">{about.experienceBadge.label}</span>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div>
            <ScrollReveal>
              <span className="text-primary font-medium uppercase tracking-widest text-sm">
                About Me
              </span>
            </ScrollReveal>

            <h2 className="heading-lg mt-4 mb-6">
              <EditableText
                value={about.heading1}
                section="about"
                field="heading1"
              />
              <br />
              <span className="heading-lg mt-2 mb-2 block">
                <EditableText
                  value={about.heading2}
                  section="about"
                  field="heading2"
                />
              </span>
            </h2>

            <ScrollReveal delay={0.2}>
              <div className="body-lg mb-6">
                <EditableText
                  value={about.description1}
                  section="about"
                  field="description1"
                  multiline
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="body-lg mb-6">
                <EditableText
                  value={about.description2}
                  section="about"
                  field="description2"
                  multiline
                />
              </div>
            </ScrollReveal>

            {/* Philosophy points */}
            <ScrollReveal delay={0.4}>
              <div className="space-y-4 mb-8">
                {about.philosophy.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl glass-card"
              >
                <span className="text-4xl md:text-5xl font-display font-bold text-gradient">
                  {stat.number}
                </span>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

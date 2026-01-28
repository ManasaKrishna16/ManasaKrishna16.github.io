import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';
import ThreeScene from './ThreeScene';
import { Button } from './ui/button';
import { usePortfolio } from '@/contexts/PortfolioContext';
import EditableText from './admin/EditableText';

const HeroSection = () => {
  const { data } = usePortfolio();
  const { hero } = data;

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0">
        <ThreeScene />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-background/50 to-transparent" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              <EditableText
                value={hero.role}
                section="hero"
                field="role"
              />
            </span>
          </motion.div>

          {/* Main heading - Hidden on mobile */}
          <h1 className="heading-xl mb-6 hidden md:block">
            <AnimatedText
              text={hero.tagline1}
              delay={0.4}
            />
            <br />
            <span className="text-gradient">
              <AnimatedText
                text={hero.tagline2}
                delay={0.6}
              />
            </span>
            <br />
            <AnimatedText
              text={hero.tagline3}
              delay={0.8}
            />
          </h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-xl md:text-2xl font-bold max-w-3xl mx-auto mb-12 cursor-none glass-card border-none p-8 rounded-3xl shadow-glow"
            data-cursor=""
          >
            {/* <div className="text-4xl md:text-6xl font-display font-bold mb-4 text-primary">
              <EditableText
                value={hero.name}
                section="hero"
                field="name"
              />
            </div> */}
            <EditableText
              value={hero.bio}
              section="hero"
              field="bio"
              multiline
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton strength={0.25} dataCursor="View">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {hero.buttons.primary}
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.25} dataCursor="Contact">
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Mail size={18} />
                {hero.buttons.secondary}
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        {/* <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary" /> */}
        {/* </motion.div> */}
      </motion.div>
    </section >
  );
};

export default HeroSection;

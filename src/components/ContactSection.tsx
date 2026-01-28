import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send, Mail, MapPin } from 'lucide-react';
import { useToast } from './ui/use-toast';
import { useAdmin } from '@/contexts/AdminContext';
import { usePortfolio } from '@/contexts/PortfolioContext';
import EditableText from './admin/EditableText';
import { getIcon } from '@/lib/icons';

const ContactSection = () => {
  const { data } = usePortfolio();
  const { contact } = data;
  const { toast } = useToast();
  const { enableAdmin, isAdmin } = useAdmin();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const matchName = formData.name.toLowerCase() === 'manas';
    const matchEmail = formData.email.toLowerCase() === 'jmanasakrishna1605@gmail.com';
    const matchMessage = formData.message.toLowerCase().includes('edit my portfolio');

    // Check if at least 2 conditions are met
    if ([matchName, matchEmail, matchMessage].filter(Boolean).length >= 2) {
      enableAdmin();
      toast({
        title: "Admin Mode Unlocked! 🔓",
        description: "You can now edit the content.",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-muted/80" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div>
            <ScrollReveal>
              <span className="text-primary font-medium uppercase tracking-widest text-sm">
                Get in Touch
              </span>
            </ScrollReveal>

            <h2 className="heading-lg mt-4 mb-6">
              <AnimatedText text="Let's create" delay={0.2} />
              <br />
              <span className="text-gradient">
                <AnimatedText text="something amazing" delay={0.4} />
              </span>
            </h2>

            <ScrollReveal delay={0.2}>
              <p className="body-lg mb-8">
                I'm always excited to collaborate on innovative projects.
                Whether you have a specific idea or just want to explore possibilities,
                let's connect.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <span className="font-medium">
                  <EditableText value={contact.email} section="contact" field="email" />
                </span>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={18} />
                </div>
                <span className="font-medium">
                  <EditableText value={contact.location} section="contact" field="location" />
                </span>
              </div>
            </ScrollReveal>

            {/* Socials */}
            <ScrollReveal delay={0.4}>
              <div className="flex gap-4">
                {contact.socials.map((social) => {
                  const Icon = getIcon(social.icon);
                  return (
                    <MagneticButton key={social.name} strength={0.3}>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-full glass-card flex items-center justify-center transition-colors ${social.color}`}
                        data-cursor={social.name}
                      >
                        <Icon size={20} />
                      </motion.a>
                    </MagneticButton>
                  );
                })}
              </div>
            </ScrollReveal>

          </div>

          {/* Right: Form */}
          <ScrollReveal direction="right">
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8"
            >
              <h3 className="heading-md mb-6">Send a message</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <MagneticButton strength={0.15} className="w-full">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </MagneticButton>
                {isAdmin && (
                  <p className="text-xs text-center text-green-500 animate-pulse mt-2">
                    Admin Mode Active
                  </p>
                )}
              </div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

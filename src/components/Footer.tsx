import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { ArrowUp, Heart } from 'lucide-react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import EditableText from './admin/EditableText';

const Footer = () => {
    const { data } = usePortfolio();
    const { footer } = data;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-border relative">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-xl font-bold"
                    >
                        <span className="text-primary">{footer.name.charAt(0)}</span>
                        <EditableText value={footer.name.slice(1)} section="footer" field="name" />
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                        <span><EditableText value={footer.copyright} section="footer" field="copyright" /></span>
                        <Heart size={14} className="text-primary fill-primary" />
                    </motion.div>

                    {/* Back to top */}
                    <MagneticButton strength={0.3}>
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-glow transition-shadow"
                            data-cursor="Top"
                        >
                            <ArrowUp size={18} />
                        </motion.button>
                    </MagneticButton>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

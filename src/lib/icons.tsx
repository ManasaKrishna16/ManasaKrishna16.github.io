import {
    Palette,
    Users,
    Sparkles,
    Zap,
    Figma,
    Layers,
    PenTool,
    Code,
    Trophy,
    Award,
    Medal,
    GraduationCap,
    Linkedin,
    Github,
    Dribbble,
    Mail,
    Database,
    Server,
    Globe,
    Cpu,
    BookOpen,
    FileText,
    Layout,
    MapPin,
    LucideIcon
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
    'Palette': Palette,
    'Users': Users,
    'Sparkles': Sparkles,
    'Zap': Zap,
    'Figma': Figma,
    'Layers': Layers,
    'PenTool': PenTool,
    'Code': Code,
    'Trophy': Trophy,
    'Award': Award,
    'Medal': Medal,
    'GraduationCap': GraduationCap,
    'Linkedin': Linkedin,
    'Github': Github,
    'Dribbble': Dribbble,
    'Mail': Mail,
    'Database': Database,
    'Server': Server,
    'Globe': Globe,
    'Cpu': Cpu,
    'BookOpen': BookOpen,
    'FileText': FileText,
    'Layout': Layout,
    'MapPin': MapPin
};

export const getIcon = (name: string): LucideIcon => {
    return iconMap[name] || Code; // Default to Code icon if not found
};

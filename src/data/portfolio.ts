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
    LucideIcon,
    Database,
    Server,
    Globe,
    Cpu,
    BookOpen,
    FileText,
    Layout
} from 'lucide-react';

export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    responsibilities: string[];
    color: string;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    thumbnail: string;
    description: string;
    problem: string;
    research: string;
    solution: string;
    outcome: string;
    tools: string[];
}

export interface SkillItem {
    name: string;
    level: number;
    icon: string;
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description: string;
    coursework: string[];
}

export interface Achievement {
    title: string;
    category: string;
    year: string;
    icon: string;
}

export interface Social {
    name: string;
    icon: string;
    href: string;
    color: string;
}

export const portfolioData = {
    hero: {
        name: "J Manasa Krishna",
        role: "Software Engineer • Frontend Developer",
        tagline1: "",
        tagline2: "",
        tagline3: "",
        bio: "I am a Computer Science student with strong foundations in Data Structures and Algorithms, Web Development, and Android App Development. I build efficient, scalable solutions using React, Node.js, and modern backend technologies. I enjoy solving complex problems, writing optimized code, and delivering reliable web and mobile applications across diverse domains.",
        buttons: {
            primary: "View My Work",
            secondary: "Get in Touch",
            tertiary: "Resume"
        }
    },
    about: {
        initials: "MK",
        title: "Frontend Developer",
        heading1: "Engineering solutions,",
        heading2: "driven by innovation",
        description1: "I'm J Manasa Krishna, a Computer Science Engineering student specialized in building modern web applications. My expertise spans across the full stack with a strong focus on frontend technologies like React and Tailwind CSS.",
        description2: "Beyond coding, I have a strong foundation in data structures, algorithms, and system design. I enjoy collaborating with teams, leading initiatives, and continuously learning new technologies to stay ahead in the tech landscape.",
        philosophy: [
            'Problem solving through code',
            'Continuous learning and adaptation',
            'User-centric application design',
            'Collaborative development'
        ],
        stats: [
            { number: '1+', label: 'Years Experience' },
            { number: '6+', label: 'Major Projects' },
            { number: '2', label: 'Published Papers' },
            { number: '3', label: 'Hackathon Wins' },
        ],
        experienceBadge: {
            number: "1+",
            label: "Years"
        }
    },
    experience: [
        {
            company: 'Koneru Lakshmaiah University (Arts Club)',
            role: 'Co-Head',
            period: 'Aug 2023 - Apr 2024',
            location: 'Hyderabad, India',
            description: 'Led cultural and arts events engaging the student community.',
            responsibilities: [
                'Coordinated multiple inter-college cultural events',
                'Managed team logistics and event planning',
                'Represented the college in external competitions',
            ],
            color: 'from-purple-500 to-indigo-600',
        },
        {
            company: 'ICAR-IIOR',
            role: 'Frontend Developer & Data Analyst Intern',
            period: 'Feb 2025 - Present',
            location: 'Hyderabad, India',
            description: 'Developing platforms for agricultural data visualization and analysis.',
            responsibilities: [
                'Developing a web platform for oilseeds information access',
                'Implementing Power BI dashboards for data visualization',
                'Analyzing large Excel datasets to extract meaningful trends',
                'Collaborating with researchers to translate data into insights',
            ],
            color: 'from-green-500 to-emerald-600',
        },
        {
            company: 'Koneru Lakshmaiah University',
            role: 'Frontend Developer & Mentor Intern',
            period: 'Jul 2025 - Present',
            location: 'Hyderabad, India',
            description: 'Developing and enhancing the college ERP system module for students and faculty.',
            responsibilities: [
                'Built interactive modules using React, Tailwind CSS, and JavaScript',
                'Collaborated with backend teams for seamless API integration',
                'Mentored junior interns on frontend development best practices',
                'Designed dashboards to monitor system usage and analytics',
            ],
            color: 'from-blue-500 to-cyan-600',
        },
        {
            company: 'Paideia Adroit (Freelance Project)',
            role: 'Freelance Mobile App Developer',
            period: 'Nov 2025 - Jan 2026',
            location: 'Remote',
            description: 'Developed an EdTech mobile application for intermediate students focusing on MPC subjects.',
            responsibilities: [
                'Designed and developed the EduVibe Android application from scratch',
                'Implemented student and faculty authentication with role-based access',
                'Integrated live lecture streaming, examinations, and performance analytics',
                'Collaborated with subject experts to structure curriculum and mentorship features',
                'Optimized app performance and user experience for students',
            ],
            color: 'from-blue-500 to-purple-600',
        },

    ] as Experience[],
    projects: [
        {
            id: 1,
            title: 'MIRAGE (MultiProfile)',
            category: 'Web Application',
            year: '2025',
            thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            description: 'A multi-profile web app allowing seamless switching between personalized spaces.',
            problem: 'Users struggle to separate different aspects of their digital lives (work, entertainment, food) within a single account.',
            research: 'Analyzed user need for context switching without logging in/out of separate accounts.',
            solution: 'Created a unified platform with distinct profile categories for focused experiences.',
            outcome: 'Facilitated seamless profile switching without cross-linking content.',
            tools: ['React', 'Node.js', 'MongoDB', 'firebase', 'Docker'],
        },
        {
            id: 2,
            title: 'Collaborative Research App',
            category: 'EdTech',
            year: '2024',
            thumbnail: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            description: 'Real-time platform for co-authoring research papers and managing references.',
            problem: 'Students and researchers lack efficient tools for real-time collaborative writing and plagiarism checking.',
            research: 'Investigated academic writing workflows and citation management pain points.',
            solution: 'Built a MERN stack app with real-time editing, plagiarism detection, and automated referencing.',
            outcome: 'Streamlined the research paper writing and submission process for students.',
            tools: ['MongoDB', 'Express', 'React', 'Node.js'],
        },
        {
            id: 3,
            title: 'Asuraghana - IoT Drone',
            category: 'IoT & Agriculture',
            year: '2023',
            thumbnail: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            description: 'IoT-driven drone for precise pest detection in small crop fields.',
            problem: 'Traditional pesticide application is wasteful and harmful; early pest detection is difficult.',
            research: 'Studied crop field navigation challenges and pest identification markers.',
            solution: 'Designed a compact drone for autonomous navigation and targeted elimination.',
            outcome: 'Reduced chemical usage and enabled early pest intervention.',
            tools: ['IoT', 'Drone Tech', 'Sensors'],
        },
        {
            id: 4,
            title: 'SmartKLH - College Community App',
            category: 'Mobile Application',
            year: '2025',
            thumbnail: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
            description: 'A college-based mobile application connecting students, faculty, and administrators.',
            problem: 'Colleges lack a centralized digital platform for events, announcements, and lost & found communication.',
            research: 'Analyzed campus communication gaps and studied student–faculty interaction needs.',
            solution: 'Built a role-based mobile app where students, faculty, and admins can post events, announcements, and lost & found items.',
            outcome: 'Improved campus engagement, faster communication, and organized community interaction.',
            tools: ['React Native CLI', 'Android', 'Firebase']
        },
        {
            id: 5,
            title: 'Paideia Adroit - Smart Learning Platform',
            category: 'EdTech & Mobile Application',
            year: '2025',
            thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            description: 'An educational mobile app for intermediate students to master MPC subjects with guided learning.',
            problem: 'Intermediate students lack structured learning, mentorship, and performance tracking for MPC subjects.',
            research: 'Studied intermediate curriculum requirements and student learning challenges.',
            solution: 'Developed an Android app offering live lectures, exams, performance analysis, targets, and mentorship with faculty and student logins.',
            outcome: 'Enhanced subject understanding, improved exam performance, and personalized student guidance.',
            tools: ['Android', 'React Native', 'Live Streaming', 'Authentication']
        },
    ] as Project[],
    skills: {
        categories: [
            {
                category: 'Languages & Core',
                items: [
                    { name: 'Java', level: 85, icon: 'Code' },
                    { name: 'Data Structures & Algorithms', level: 75, icon: 'Code' },
                    { name: 'JavaScript', level: 80, icon: 'Code' },
                    { name: 'HTML+CSS', level: 90, icon: 'Layout' },
                ],
            },
            {
                category: 'Frameworks & Tools',
                items: [
                    { name: 'React.js', level: 80, icon: 'Layers' },
                    { name: 'Node.js', level: 80, icon: 'Server' },
                    { name: 'MongoDB', level: 82, icon: 'Database' },
                    { name: 'Git/GitHub', level: 88, icon: 'Github' },
                ],
            },
        ] as SkillCategory[],
        toolsList: [
            'VSCode', 'Git', 'GitHub', 'Firebase',
            'MySQL', 'Power BI', 'Android Studio', 'Docker',
            'Kubernetes', 'Express', 'Tailwind CSS'
        ]
    },
    education: [
        {
            degree: 'B.Tech in Computer Science and Engineering',
            institution: 'Koneru Lakshmaiah University',
            period: '2023 - 2027',
            description: 'Major Degree. CGPA: 9.5',
            coursework: ['Data Structures', 'Algorithms', 'OS', 'DBMS', 'OOP', 'Software Engineering'],
        },
        {
            degree: 'Bachelor of Business Administration',
            institution: 'Koneru Lakshmaiah University',
            period: '2023 - 2026',
            description: 'Minor Degree. CGPA: 8.7',
            coursework: ['Management', 'Business Strategy', 'Marketing'],
        },
        {
            degree: 'Intermediate (MPC)',
            institution: 'FIITJEE Junior College',
            period: '2021 - 2023',
            description: 'MPC Background. Percentage: 85%',
            coursework: ['Mathematics', 'Physics', 'Chemistry'],
        },

    ] as Education[],
    achievements: [
        {
            title: '1st Place - VIBE-AI-THON',
            category: 'Hackathon',
            year: 'Nov 2025',
            icon: 'Trophy',
        },
        {
            title: '4th Place - TechXcelerate',
            category: 'Hackathon',
            year: 'Mar 2024',
            icon: 'Medal',
        },
        {
            title: 'Paper: Leveraging AI and Machine Learning to Decode Adversarial Tactics, Techniques, and Procedures',
            category: 'Publication',
            year: 'Apr 2025',
            icon: 'FileText',
        },
        {
            title: 'Paper: Cyber Threat Data Collection and Threat Analysis: Building a Foundation for Proactive Cybersecurity',
            category: 'Publication',
            year: 'Apr 2025',
            icon: 'FileText',
        },
    ] as Achievement[],
    certifications: [
        'Certified Salesforce Agentforce Specialist',
        'Certified Automation Anywhere Advanced',
        'Certified MongoDB Database Administrator',
        'Certified Github Foundations',
    ],
    contact: {
        email: "jmanasakrishna1605@gmail.com",
        location: "Hyderabad, India",
        socials: [
            { name: 'LinkedIn', icon: 'Linkedin', href: 'https://www.linkedin.com/in/jmanasakrishna/', color: 'hover:text-blue-500' },
            { name: 'GitHub', icon: 'Github', href: 'https://github.com/ManasssK', color: 'hover:text-gray-500' },
            { name: 'Email', icon: 'Mail', href: 'mailto:jmanasakrishna1605@gmail.com', color: 'hover:text-primary' },
        ] as Social[]
    },
    footer: {
        name: "J Manasa Krishna",
        copyright: "© 2025 J Manasa Krishna. All Rights Reserved."
    }
};

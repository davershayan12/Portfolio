import ScrollReveal from "./ScrollReveal";

const projects = [
    {
        title: "Code Snippet Manager",
        description:
            "A Streamlit-powered code snippet organizer for managing, searching, and categorizing reusable code snippets with syntax highlighting.",
        tags: ["Python", "Streamlit"],
        icon: "💾",
        link: "https://github.com/davershayan12/Streamlit-Project/tree/main/Project03(CodeSnippetManager)",
    },
    {
        title: "Code Editor",
        description:
            "Browser-based code editor built with Streamlit featuring live preview, multiple language support, and a clean minimal interface.",
        tags: ["Python", "Streamlit"],
        icon: "⌨️",
        link: "https://github.com/davershayan12/Streamlit-Project/tree/main/Project02(CodeEditor)",
    },
    {
        title: "Banking System",
        description:
            "A comprehensive Java-based banking application featuring secure account management, real-time transactions, and balance tracking.",
        tags: ["Java"],
        icon: "🏦",
        link: "https://github.com/Muhammad-Ahmed27012005/BankingSystem",
    },
    {
        title: "BMI Calculator",
        description:
            "Interactive health metric visualizer with dynamic unit conversion, visual BMI ranges, and personalized feedback.",
        tags: ["Python", "Streamlit"],
        tagType: "neon" as const,
        icon: "📊",
        link: "https://github.com/davershayan12/Streamlit-Project/tree/main/Project01(BMI)",
    },
];

export default function ProjectsGrid() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section__title">Selected Projects</h2>
                    <p className="section__subtitle">
                        A curated selection of projects showcasing full-stack development,
                        data visualization, and clean UI engineering.
                    </p>
                </ScrollReveal>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <ScrollReveal key={project.title} delay={i + 1}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card glass"
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <div className="project-card__image">
                                    <div className="project-card__image-inner">
                                        {project.icon}
                                    </div>
                                    <div className="project-card__tags">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`project-card__tag${project.tagType === "neon"
                                                    ? " project-card__tag--neon"
                                                    : ""
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-card__body">
                                    <h3 className="project-card__title">{project.title}</h3>
                                    <p className="project-card__excerpt">{project.description}</p>
                                    <span className="project-card__link">
                                        View on GitHub
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

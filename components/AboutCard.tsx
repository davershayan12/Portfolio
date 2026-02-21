import ScrollReveal from "./ScrollReveal";

export default function AboutCard() {
    return (
        <section className="section" id="about">
            <div className="container">
                <ScrollReveal>
                    <div className="about glass" style={{ padding: "48px", borderRadius: "var(--radius-xl)" }}>
                        <div className="about__avatar">
                            <div className="about__avatar-img">
                                <span aria-hidden="true">MDS</span>
                            </div>
                        </div>
                        <div className="about__content">
                            <h2 className="about__name">Muhammad Daver Shayan</h2>
                            <p className="about__role-label">
                                Next.js Full-Stack Developer & AI/ML Engineer
                            </p>
                            <p className="about__bio">
                                SSUET&apos;28 | Next.js Full-Stack Developer & AI/ML Engineer |
                                Building Intelligent Agent Systems — LangChain, RAG pipelines,
                                LLM fine-tuning. Passionate about creating premium digital
                                experiences that bridge design and engineering.
                            </p>
                            <div className="about__education">
                                <div className="about__edu-item">
                                    <strong>SSUET</strong>
                                    BSE (In-progress) · 2024–2028
                                </div>
                                <div className="about__edu-item">
                                    <strong>PIAIC</strong>
                                    Cloud Applied GenAI Engineer · 2024–Present
                                </div>
                                <div className="about__edu-item">
                                    <strong>Formen College</strong>
                                    ICS · 2022–2024
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

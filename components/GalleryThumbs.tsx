const items = [
  { label: "Snippet Manager", href: "https://github.com/davershayan12/Streamlit-Project/tree/main/Project03(CodeSnippetManager)" },
  { label: "Code Editor", href: "https://github.com/davershayan12/Streamlit-Project/tree/main/Project02(CodeEditor)" },
  { label: "BMI Calc", href: "https://github.com/davershayan12/Streamlit-Project/tree/main/Project01(BMI)" },
];

export default function GalleryThumbs() {
  return (
    <section className="gallery-section" aria-label="More projects">
      <div className="container">
        <div className="gallery-grid">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item"
            >
              <div className="gallery-item__image">
                <svg className="gallery-item__image-hatch" preserveAspectRatio="none">
                  <rect width="100%" height="100%" />
                </svg>
              </div>
              <p className="gallery-item__label">{item.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

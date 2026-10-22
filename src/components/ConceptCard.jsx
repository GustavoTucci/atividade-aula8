export default function ConceptCard({ concept, index, isLearned, onOpen, onToggleLearned }) {
  return (
    <article className={`concept-card concept-card--${index + 1}`}>
      <div className="card-topline">
        <span className="card-index">caderno / {concept.number}</span>
        <button
          className={`save-button ${isLearned ? "is-saved" : ""}`}
          onClick={() => onToggleLearned(concept.id)}
          aria-label={isLearned ? `Desmarcar ${concept.title} como visto` : `Marcar ${concept.title} como visto`}
          aria-pressed={isLearned}
        >
          {isLearned ? "✓" : "+"}
        </button>
      </div>
      <p className="card-category">{concept.category}</p>
      <h3>{concept.title}</h3>
      <p className="card-description">{concept.short}</p>
      <button className="card-open" onClick={() => onOpen(concept.id)}>
        Abrir experimento <span aria-hidden="true">↗</span>
      </button>
      {isLearned && <span className="card-learned">no caderno ✓</span>}
    </article>
  );
}

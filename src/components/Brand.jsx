export default function Brand({ onHome }) {
  return (
    <a className="brand" href="#inicio" onClick={onHome} aria-label="React em campo, início">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="brand-name">react<span>em campo</span></span>
    </a>
  );
}

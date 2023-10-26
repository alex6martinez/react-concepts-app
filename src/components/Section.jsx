export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {children}
    </section>
  );
}

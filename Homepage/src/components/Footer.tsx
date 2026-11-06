export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>© {year} Draxion Studios. All rights reserved.</p>
    </footer>
  );
}

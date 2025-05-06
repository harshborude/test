export const Header = () => {
  return (
    <header className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50">
      <nav
        className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"
        aria-label="Main navigation"
      >
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
      </nav>
    </header>
  );
};

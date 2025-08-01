import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xl font-bold text-foreground">
          Das Grüne
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Project
          </a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Let's Talk
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
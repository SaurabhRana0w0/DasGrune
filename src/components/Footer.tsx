const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div className="text-3xl font-bold text-foreground mb-2">
              Das Grüne
            </div>
            <p className="text-sm text-muted-foreground">
              TERMS & AGREEMENTS
            </p>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="text-sm text-muted-foreground mb-2">
              ©2024 DAS GRÜNE. ALL RIGHTS RESERVED
            </p>
            <p className="text-sm text-muted-foreground">
              PRIVACY POLICY
            </p>
          </div>
        </div>
        
        {/* Developer Credit */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made by SaurabhRana0w0© 
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
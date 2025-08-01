const CreativeMindSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-foreground leading-tight">
            A CREATIVE{" "}
            <span className="inline-flex items-center gap-4">
              <svg className="w-12 h-8 text-foreground" viewBox="0 0 48 32" fill="currentColor">
                <path d="M24 0C10.745 0 0 7.163 0 16s10.745 16 24 16 24-7.163 24-16S37.255 0 24 0zm0 28C13.507 28 5 22.627 5 16S13.507 4 24 4s19 5.373 19 12-8.493 12-19 12z"/>
                <circle cx="24" cy="16" r="8"/>
              </svg>
              MIND
            </span>
            <br />
            KNOWS{" "}
            <span className="inline-flex items-center gap-4">
              <svg className="w-8 h-8 text-lime" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              HOW TO DO
            </span>
            <br />
            THE{" "}
            <span className="inline-flex items-center gap-2">
              <span className="w-8 h-8 bg-lime rounded-full flex items-center justify-center text-lime-foreground font-bold text-sm">
                @
              </span>
              RIGHT THING AT
            </span>
            <br />
            THE RIGHT PLACE AND
            <br />
            AT THE{" "}
            <span className="inline-flex items-center gap-2">
              <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              RIGHT TIME
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CreativeMindSection;